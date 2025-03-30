import { useState } from "react";
import { OutfitPickerModal, Outfit } from "./outfitPicker";
import { Heart } from "lucide-react";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastOutfit, setLastOutfit] = useState<Outfit | null>(null);

  const handleOutfitSelected = (outfit: Outfit) => {
    setLastOutfit(outfit);
    setIsOpen(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blush to-cream p-6 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <div className="max-w-lg p-8 bg-white shadow-xl rounded-2xl text-center">
        <Heart className="text-rosewood w-10 h-10 mx-auto mb-4" />

        <h1 className="text-rosewood text-4xl font-serif font-bold">
          Tap to Pick Your Outfit!
        </h1>

        <p className="text-gray-700 mt-3 text-lg">
          Let us help you find the perfect look today.
        </p>

        {lastOutfit && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-700">You picked:</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              {lastOutfit.icon}
              <span className="text-rosewood font-semibold">
                {lastOutfit.name}
              </span>
            </div>
          </div>
        )}
      </div>

      {isOpen && <OutfitPickerModal onClose={handleOutfitSelected} />}
    </div>
  );
};

export default Landing;
