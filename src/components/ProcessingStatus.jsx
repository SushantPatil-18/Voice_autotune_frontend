function ProcessingStatus() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="text-center space-y-4">
        {/* Animated Icon */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-500 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
        </div>

        {/* Status Text */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Processing Audio</h3>
          <p className="text-sm text-slate-600 mt-1">Analyzing pitch and applying autotune...</p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-2 pt-4">
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-700">Loading audio file</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-700 font-medium">Detecting pitch...</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
            <span className="text-slate-400">Applying correction</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
            <span className="text-slate-400">Saving output</span>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 italic">
            💡 Did you know? Autotune was originally developed in 1997 by Dr. Andy Hildebrand!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessingStatus;
