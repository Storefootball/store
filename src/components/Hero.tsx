import React from 'react';
import { Play } from 'lucide-react';
import { VideoPresentation } from '../types';

interface HeroProps {
  videos: VideoPresentation[];
  onVideoPlay: (video: VideoPresentation) => void;
}

const Hero: React.FC<HeroProps> = ({ videos, onVideoPlay }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/1000002431.png" 
              alt="Store Football" 
              className="h-48 md:h-64 w-auto"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            "Tacle les prix. Triple les maillots."
          </p>
          <div className="bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg inline-block mb-8 animate-pulse">
            OFFRE SPÉCIALE : 2 Maillots Achetés = 3ème OFFERT !
          </div>
        </div>

        {/* Video Presentations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-opacity-20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => onVideoPlay(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-blue-100">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 bg-opacity-10 rounded-full translate-y-32 -translate-x-32"></div>
    </section>
  );
};

export default Hero;