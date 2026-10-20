import React, { useState, useEffect } from 'react';
import { StageId, ChipSpec, GameView, STAGES } from './types/game';
import { ThreeCanvas } from './components/ThreeCanvas';
import { TitleScreen } from './components/TitleScreen';
import { HUD } from './components/HUD';
import { StageMinigames } from './components/StageMinigames';
import { SupplyChainMapModal } from './components/SupplyChainMapModal';
import { sound } from './services/audio';

const INITIAL_CHIP_SPEC: ChipSpec = {
  name: 'Kyushu-3N AI Accelerator',
  node: '3nm Target 2028',
  purity: 99.9999999,
  layersCompleted: 1,
  totalLayers: 48,
  yieldRate: 94.2,
  testedGoodDies: 21,
  totalDies: 24,
  dicedDies: 21,
  packagedUnits: 21,
  finalBinnedCount: {
    servers: 8,
    phones: 10,
    vehicles: 3
  }
};

export default function App() {
  const [view, setView] = useState<GameView>('title');
  const [currentStage, setCurrentStage] = useState<StageId>('wafers_chemistry');
  const [cameraMode, setCameraMode] = useState<'iso' | 'focus_station' | 'macro_chip'>('iso');
  const [chipSpec, setChipSpec] = useState<ChipSpec>(INITIAL_CHIP_SPEC);
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showMinigamePanel, setShowMinigamePanel] = useState<boolean>(true);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMapModalOpen(prev => !prev);
        sound.playClick();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsMapModalOpen(prev => !prev);
        sound.playClick();
      } else if (e.key >= '1' && e.key <= '5' && view === 'playing') {
        const stageIndex = parseInt(e.key) - 1;
        if (STAGES[stageIndex]) {
          setCurrentStage(STAGES[stageIndex].id);
          sound.playClick();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view]);

  const handleUpdateSpec = (partial: Partial<ChipSpec>) => {
    setChipSpec(prev => ({ ...prev, ...partial }));
  };

  const handleCompleteStage = (nextStageId: StageId) => {
    sound.playVictoryFanfare();
    setCurrentStage(nextStageId);
    setCameraMode('focus_station');
  };

  const handleReset = () => {
    setChipSpec(INITIAL_CHIP_SPEC);
    setCurrentStage('wafers_chemistry');
    setCameraMode('iso');
  };

  const handleToggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#f5f3ee] font-sans select-none">
      {/* 3D WebGL Canvas Layer (Mounted in isolated container) */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas
          currentStage={currentStage}
          viewMode={cameraMode}
          onStationClick={(stageId) => {
            sound.playClick();
            setCurrentStage(stageId);
            setCameraMode('focus_station');
          }}
        />
      </div>

      {/* Title Screen View */}
      {view === 'title' && (
        <TitleScreen
          onStart={() => {
            setView('playing');
            setCameraMode('focus_station');
          }}
          onOpenMap={() => setIsMapModalOpen(true)}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      )}

      {/* Main Playing View Overlay */}
      {view === 'playing' && (
        <>
          {/* Top-Right Floating Minigame / Hand-on Tool Controller */}
          <div className="absolute top-20 right-4 sm:right-6 z-20 pointer-events-auto max-w-lg w-full">
            <div className="flex justify-end mb-1">
              <button
                onClick={() => {
                  sound.playClick();
                  setShowMinigamePanel(!showMinigamePanel);
                }}
                className="px-2.5 py-1 bg-white/90 hover:bg-white text-stone-700 text-[11px] font-semibold rounded-lg border border-stone-200 shadow-sm cursor-pointer"
              >
                {showMinigamePanel ? 'Minimize Tool Controls ▴' : 'Open Tool Controls ▾'}
              </button>
            </div>

            {showMinigamePanel && (
              <StageMinigames
                currentStage={currentStage}
                chipSpec={chipSpec}
                onUpdateSpec={handleUpdateSpec}
                onCompleteStage={handleCompleteStage}
                onOpenMap={() => setIsMapModalOpen(true)}
              />
            )}
          </div>

          {/* Low-Occlusion HUD and Bottom Control Dock */}
          <HUD
            currentStage={currentStage}
            chipSpec={chipSpec}
            viewMode={cameraMode}
            onChangeViewMode={setCameraMode}
            onSelectStage={(stage) => {
              setCurrentStage(stage);
              setCameraMode('focus_station');
            }}
            onOpenMap={() => setIsMapModalOpen(true)}
            onReset={handleReset}
            isMuted={isMuted}
            onToggleMute={handleToggleMute}
          />
        </>
      )}

      {/* Interactive Supply Chain Map Briefing Modal */}
      <SupplyChainMapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        onSelectStage={(stageId) => {
          if (view === 'title') setView('playing');
          setCurrentStage(stageId);
          setCameraMode('focus_station');
        }}
      />
    </div>
  );
}
