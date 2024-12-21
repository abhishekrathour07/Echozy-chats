import { Ban, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function MenupopUp({ title }: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p>{title}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="w-56 bg-slate-800 dark:border-black dark:bg-white text-white dark:text-slate-800">
        <DropdownMenuLabel className="border-b py-2">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup >
          <DropdownMenuItem className="flex gap-2 items-center">
            <Trash2 size={18} /> Clear Chat
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center">
            <Ban size={18} /> Block User
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
