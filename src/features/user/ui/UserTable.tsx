import React from "react"
import dayjs from "dayjs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from "@/features/user/types"
import { UserCard } from "./UserCard"

type Props = {
  users: User[]
  page: number
  limit: number
}

export const UsersTable: React.FC<Props> = ({ users, page, limit }) => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden space-y-3">
        {users.map((u, idx) => {
          const no = (page - 1) * limit + (idx + 1)
          return <UserCard key={u.id} user={u} no={no} />
        })}
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-14">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Nomor Handphone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-56">Created at</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((u, idx) => {
              const no = (page - 1) * limit + (idx + 1)

              return (
                <TableRow key={u.id}>
                  <TableCell>{no}</TableCell>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell>{u.phone}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>
                    {dayjs(u.createdAt).format("DD MMM YYYY, HH:mm")}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}