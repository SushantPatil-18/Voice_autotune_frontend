import { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import PresetSelector from './components/PresetSelector';
import AudioPlayer from './components/AudioPlayer';
import ProcessingStatus from './components/ProcessingStatus';
import ResultsDisplay from './components/ResultsDisplay';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPreset, setSelectedPreset] = useState('moderate');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setResult(null);
    setError(null);
  };

  const handleProcess = async () => {
    if (!selectedFile) {
      setError('Please select an audio file first');
      return;
    }

    setProcessing(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('preset', selectedPreset);

    try {
      const response = await axios.post(`${API_URL}/autotune`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setResult(response.data);
      } else {
        setError(response.data.error || 'Processing failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'An error occurred');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (result && result.output_filename) {
      window.open(`${API_URL}/download/${result.output_filename}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Voice Autotune</h1>
              <p className="text-sm text-slate-600">Professional audio pitch correction</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upload & Settings */}
          <div className="lg:col-span-2 space-y-6">
            <FileUpload onFileSelect={handleFileSelect} selectedFile={selectedFile} />
            
            <PresetSelector 
              selectedPreset={selectedPreset} 
              onPresetChange={setSelectedPreset}
              disabled={processing}
            />

            {/* Process Button */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <button
                onClick={handleProcess}
                disabled={!selectedFile || processing}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all duration-200 ${
                  !selectedFile || processing
                    ? 'bg-slate-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                {processing ? (
                  <span className="flex items-center justify-center space-x-3">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Process Audio</span>
                  </span>
                )}
              </button>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-red-800 font-semibold">Error</h3>
                    <p className="text-red-700 text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Status & Results */}
          <div className="lg:col-span-1 space-y-6">
            {processing && <ProcessingStatus />}
            
            {result && !processing && (
              <>
                <ResultsDisplay result={result} />
                <AudioPlayer 
                  filename={result.output_filename} 
                  onDownload={handleDownload}
                />
              </>
            )}

            {/* Info Card */}
            {!result && !processing && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>How it works</span>
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                    <span>Upload your vocal recording (WAV, MP3, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                    <span>Choose an autotune preset that fits your style</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                    <span>Click "Process Audio" and wait for the magic</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
                    <span>Listen to and download your autotuned voice!</span>
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-600">
            Professional voice autotune powered by advanced audio processing
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
