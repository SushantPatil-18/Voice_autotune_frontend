function ResultsDisplay({ result }) {
  const stats = [
    {
      label: 'Original Pitch',
      value: result.detected_note,
      subValue: `${result.detected_frequency.toFixed(2)} Hz`,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Target Pitch',
      value: result.target_note,
      subValue: `${result.target_frequency.toFixed(2)} Hz`,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Correction',
      value: `${Math.abs(result.correction_semitones).toFixed(2)} semitones`,
      subValue: result.correction_semitones > 0 ? 'Pitched up' : 'Pitched down',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      label: 'Duration',
      value: `${result.duration.toFixed(2)}s`,
      subValue: `${result.sample_rate} Hz`,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-800">Processing Complete!</h3>
      </div>

      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bg} rounded-lg p-3`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-600 font-medium">{stat.label}</p>
                <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.subValue}</p>
              </div>
              <div className={`w-10 h-10 ${stat.bg} rounded-full flex items-center justify-center border-2 ${stat.color.replace('text-', 'border-')}`}>
                {index === 0 && (
                  <svg className={`w-5 h-5 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className={`w-5 h-5 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className={`w-5 h-5 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                )}
                {index === 3 && (
                  <svg className={`w-5 h-5 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Preset used: <span className="font-semibold capitalize">{result.preset}</span></span>
        </div>
      </div>
    </div>
  );
}

export default ResultsDisplay;
