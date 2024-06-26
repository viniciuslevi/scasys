import { CreditCard, LayoutDashboard, LogOut, Settings } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export type NormalizedUser = {
  name: string
  email: string
  imageUrl: string
}

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: NormalizedUser
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  //const { signOut } = useClerk()
  //const router = useRouter()

  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.imageUrl} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="flex items-center space-x-2.5">
            <LayoutDashboard className="h-4 w-4" />
            <p className="text-sm">Dashboard</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="" className="flex items-center space-x-2.5">
            <CreditCard className="h-4 w-4" />
            <p className="text-sm">Experimentos</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/" className="flex items-center space-x-2.5">
            <Settings className="h-4 w-4" />
            <p className="text-sm">Configurações</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-center space-x-2.5">
            <LogOut className="h-4 w-4" />
            <button
              onClick={() => {
                localStorage.removeItem("token")
                localStorage.removeItem("user_id")
                window.location.reload()

                navigate("/")
              }}
            >
              <p className="text-sm">Log Out</p>
            </button>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
