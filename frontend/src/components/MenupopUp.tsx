import { Ban, Trash2, User } from "lucide-react"
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
      <DropdownMenuContent side="bottom" className="w-56 bg-slate-800 text-white">
        <DropdownMenuLabel className="border-b py-2">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup >
          <DropdownMenuItem >
            <p className="flex gap-2 items-center"><User size={18} /> Profile</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p className="flex gap-2 items-center "><Trash2 size={18} /> Clear Chat</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p className="flex gap-2 items-center"><Ban size={18} /> Block User</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
