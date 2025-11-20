import { useState } from 'react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const catImages = [
    {
      url: 'https://cdn.poehali.dev/projects/5ced073d-b56e-419a-8c79-e139caf0d018/files/98b2c312-b86b-4ab1-bb07-eae49a0897dd.jpg',
      title: 'Neon Spirit'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5ced073d-b56e-419a-8c79-e139caf0d018/files/33afd31f-8b03-429f-91a4-2aa52d41b32c.jpg',
      title: 'Cyber Space'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5ced073d-b56e-419a-8c79-e139caf0d018/files/99f615e7-3e40-4eab-8590-5188bf1219fc.jpg',
      title: 'Hologram Cat'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-7xl font-black text-primary neon-text mb-4 tracking-wider animate-glow-pulse">
            CYBER CATS
          </h1>
          <p className="text-2xl text-secondary neon-text tracking-widest">
            // ГАЛЕРЕЯ БУДУЩЕГО //
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-glow"></div>
              <div className="relative bg-card rounded-2xl p-2 border-2 border-primary/50">
                <img 
                  src={catImages[selectedImage].url}
                  alt={catImages[selectedImage].title}
                  className="w-full max-w-2xl h-auto rounded-xl animate-float"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary neon-text mb-2">
              {catImages[selectedImage].title}
            </h2>
            <div className="flex justify-center items-center gap-2 text-accent">
              <span className="text-2xl">▶</span>
              <span className="text-xl tracking-wider">АКТИВНАЯ ГОЛОГРАММА</span>
              <span className="text-2xl">◀</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {catImages.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  selectedImage === index ? 'scale-110' : 'scale-100 hover:scale-105'
                }`}
              >
                <div className={`absolute -inset-1 rounded-xl blur-md transition-all duration-300 ${
                  selectedImage === index 
                    ? 'bg-secondary neon-glow-pink' 
                    : 'bg-primary/50 group-hover:bg-primary'
                }`}></div>
                <div className="relative bg-card rounded-xl p-2 border-2 border-primary/30 overflow-hidden">
                  <img 
                    src={cat.url}
                    alt={cat.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                      <span className="text-4xl animate-pulse">◆</span>
                    </div>
                  )}
                </div>
                <p className="text-center mt-3 text-sm font-bold tracking-wider text-primary">
                  {cat.title.toUpperCase()}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-primary via-secondary to-accent p-[2px] rounded-full neon-glow animate-pulse">
              <div className="bg-background px-8 py-3 rounded-full">
                <p className="text-lg font-bold tracking-widest bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  // СИСТЕМА АКТИВНА //
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {catImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedImage === index 
                  ? 'bg-secondary w-8 neon-glow-pink' 
                  : 'bg-primary/50 hover:bg-primary'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
