const presets = [
  {
    id: 'natural',
    name: 'Natural',
    description: 'Subtle pitch correction for a natural sound',
    icon: '🎵',
    strength: 0.5,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'moderate',
    name: 'Moderate',
    description: 'Noticeable correction, balanced and professional',
    icon: '🎤',
    strength: 0.8,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'tpain',
    name: 'T-Pain',
    description: 'Full robotic effect for that signature sound',
    icon: '🤖',
    strength: 1.0,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'chromatic',
    name: 'Chromatic',
    description: 'All 12 notes, maximum flexibility',
    icon: '🎹',
    strength: 0.8,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'minor',
    name: 'Minor Scale',
    description: 'A minor scale for darker, emotional tones',
    icon: '🎸',
    strength: 0.8,
    color: 'from-indigo-500 to-blue-500'
  }
];

function PresetSelector({ selectedPreset, onPresetChange, disabled }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Choose Preset</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {presets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onPresetChange(preset.id)}
            disabled={disabled}
            className={`relative p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedPreset === preset.id
                ? `border-blue-500 bg-blue-50 shadow-md`
                : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {/* Selected Indicator */}
            {selectedPreset === preset.id && (
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Icon */}
            <div className="text-3xl mb-2">{preset.icon}</div>
            
            {/* Content */}
            <h3 className="font-semibold text-slate-800 mb-1">{preset.name}</h3>
            <p className="text-xs text-slate-600 mb-2">{preset.description}</p>
            
            {/* Strength Indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-500">Strength:</span>
              <div className="flex-1 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${preset.color} h-full rounded-full transition-all duration-300`}
                  style={{ width: `${preset.strength * 100}%` }}
                />
              </div>
              <span className="text-xs text-slate-600 font-medium">{preset.strength}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PresetSelector;
