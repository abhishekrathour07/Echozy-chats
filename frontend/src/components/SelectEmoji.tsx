import React, { useRef, useState, useEffect } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import { Smile } from 'lucide-react';
import { useTheme } from '../context/theme';

const EmojiPickerPopup: React.FC = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // References for menu and picker
  const menuRef = useRef<HTMLDivElement | null>(null);
  const emojiRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useTheme(); // Use the theme context
  const [emojiTheme, setEmojiTheme] = useState<"light" | "dark">(theme);

  // Sync emoji theme with global theme
  useEffect(() => {
    setEmojiTheme(theme);
  }, [theme]);

  const togglePicker = () => setIsPickerOpen(!isPickerOpen);

  // Close picker when clicking outside
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
        className="p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 cursor-pointer h-10 w-10 flex items-center justify-center dark:text-slate-800 dark:bg-white"
        onClick={togglePicker}
      >
        <Smile />
      </div>

      {/* Emoji Picker Popup */}
      {isPickerOpen && (
        <div
          ref={emojiRef}
          className="absolute bottom-12 mt-2 right-0 bg-slate-800 dark:text-slate-800 dark:bg-white rounded-lg shadow-lg overflow-hidden z-50"
        >
          <EmojiPicker
            skinTonesDisabled={true}
            searchPlaceHolder="Search emoji"
            theme={emojiTheme === 'dark' ? Theme.LIGHT : Theme.DARK}
            previewConfig={{
              showPreview: false,
            }}
            style={{
              backgroundColor: emojiTheme === 'dark' ?  '#ffffff' : '#1e293b' ,
              border: 'none',
              padding: '4px',
              height: '350px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
