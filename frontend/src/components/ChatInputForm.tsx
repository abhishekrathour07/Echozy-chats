import React from 'react';
import { Form, FormField, FormItem, FormControl } from './ui/form';
import { Mic, Paperclip, Camera, Send } from 'lucide-react';
import EmojiPickerPopup from './SelectEmoji';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';


const ChatInputForm: React.FC = () => {
    const form = useForm()
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <div className="flex items-center gap-2 bg-slate-800 p-4 border-t border-gray-600 relative w-full dark:text-slate-800 dark:bg-white">
                {/* FormField for Message Input */}
                <div className="flex-1">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Type a message..."
                                        className="h-10 bg-slate-700  text-white dark:text-slate-800 dark:bg-slate-100 rounded-lg px-4 focus:ring-[#f56565] focus:border-none w-full"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Additional Actions */}
                <div className="absolute right-32 flex items-center gap-1">
                    <Mic className="text-slate-400 dark:text-slate-800 hover:text-slate-500 dark:hover:bg-white h-8 w-8 p-1 rounded-full hover:bg-slate-900" />
                    <Paperclip className="text-slate-400 dark:text-slate-800 hover:text-slate-500 dark:hover:bg-white h-7 w-7 p-1 rounded-full hover:bg-slate-900" />
                    <Camera className="text-slate-400 dark:text-slate-800 hover:text-slate-500 dark:hover:bg-white h-8 w-8 p-1 rounded-full hover:bg-slate-900" />
                </div>
                {/* emoji picker  */}
                <EmojiPickerPopup />

                {/* Send Button */}
                <div className="bg-[#ca4a4a] text-white h-10 w-12 rounded-lg hover:bg-[#ec6d6d] cursor-pointer flex items-center justify-center">
                    <Send onClick={form.handleSubmit(onSubmit)} />
                </div>
            </div>
        </Form>

    );
};

export default ChatInputForm;
