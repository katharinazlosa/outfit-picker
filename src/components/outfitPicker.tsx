import { JSX, useState } from "react";
import {
  X,
  Shirt,
  ShoppingBag,
  Zap,
  Briefcase,
  RefreshCcw,
} from "lucide-react";

export type Outfit = {
  name: string;
  icon: JSX.Element;
};

const outfits: Outfit[] = [
  {
    name: "Casual Jeans & T-Shirt",
    icon: <Shirt className="w-8 h-8 text-blue-500" />,
  },
  {
    name: "Elegant Outfit",
    icon: <ShoppingBag className="w-8 h-8 text-pink-500" />,
  },
  { name: "Sporty Look", icon: <Zap className="w-8 h-8 text-green-500" /> },
  {
    name: "Business Casual",
    icon: <Briefcase className="w-8 h-8 text-gray-700" />,
  },
];

export const OutfitPickerModal = ({
  onClose,
}: {
  onClose: (outfit: Outfit) => void;
}) => {
  const [selectedOutfit, setSelectedOutfit] = useState(
    outfits[Math.floor(Math.random() * outfits.length)]
  );

  const changeOutfit = () => {
    let newOutfit;
    do {
      newOutfit = outfits[Math.floor(Math.random() * outfits.length)];
    } while (newOutfit.name === selectedOutfit.name); // Avoid picking the same outfit
    setSelectedOutfit(newOutfit);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-rosewood"
          onClick={() => onClose(selectedOutfit)}
        >
          <X className="w-6 h-6" />
        </button>

        {selectedOutfit.icon}
        <h2 className="text-rosewood font-serif text-2xl mt-4">
          {selectedOutfit.name}
        </h2>

        <button
          onClick={changeOutfit}
          className="mt-4 px-4 py-2 bg-rosewood text-cream rounded-full text-lg flex items-center gap-2 shadow-md hover:bg-opacity-80 transition-all"
        >
          <RefreshCcw className="w-5 h-5" />
          Change Outfit
        </button>
      </div>
    </div>
  );
};
