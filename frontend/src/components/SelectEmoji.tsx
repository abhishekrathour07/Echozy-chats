import React, { useRef, useState, useEffect } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import { Smile } from 'lucide-react';

type Props = {
  fullscreen: boolean;
};

const EmojiPickerPopup: React.FC<Props> = ({ fullscreen }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // References for menu and picker
  const menuRef = useRef<HTMLDivElement | null>(null);
  const emojiRef = useRef<HTMLDivElement | null>(null);

  const togglePicker = () => setIsPickerOpen(!isPickerOpen);

  const height = fullscreen ? "350px" : "300px";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsPickerOpen(false);
      }
    };

    if (isPickerOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isPickerOpen]);

  return (
    <div className="relative">
      {/* Menu Button */}
      <div
        ref={menuRef}
        className="p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 cursor-pointer h-10 w-10 flex items-center justify-center"
        onClick={togglePicker}
      >
        <Smile />
      </div>

      {/* Emoji Picker Popup */}
      {isPickerOpen && (
        <div
          ref={emojiRef}
          className="absolute bottom-12 mt-2 right-0 bg-slate-800 rounded-lg shadow-lg overflow-hidden z-50"
        >
          <EmojiPicker
            skinTonesDisabled={true}
            searchPlaceHolder="Search echozy emoji"
            theme={Theme.DARK}
            // Disable the preview by passing this
            previewConfig={{
              showPreview: false, // Ensure the preview section does not appear
            }}
            style={{
              backgroundColor: '#1e293b',
              border: 'none',
              padding: '4px',
              height: height,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
