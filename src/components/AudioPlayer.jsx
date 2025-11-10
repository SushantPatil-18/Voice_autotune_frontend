import { useRef, useState } from 'react';

const API_URL = 'http://localhost:5000/api';

function AudioPlayer({ filename, onDownload }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
        <span>Your Autotuned Audio</span>
      </h3>

      {/* Audio Element */}
      <audio 
        ref={audioRef}
        src={`${API_URL}/download/${filename}`}
        onEnded={handleAudioEnd}
        className="w-full mb-4"
        controls
      />

      {/* Custom Controls */}
      <div className="space-y-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 shadow-md"
        >
          {isPlaying ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              <span>Pause</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Play Audio</span>
            </>
          )}
        </button>

        {/* Download Button */}
        <button
          onClick={onDownload}
          className="w-full py-3 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-opacity-30 transition-all flex items-center justify-center space-x-2 border-2 border-white border-opacity-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download Audio</span>
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 pt-4 border-t border-white border-opacity-30">
        <p className="text-sm text-white text-opacity-90 flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>File: {filename}</span>
        </p>
      </div>
    </div>
  );
}

export default AudioPlayer;
