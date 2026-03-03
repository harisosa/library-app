import React from "react"
import dayjs from "dayjs"
import { User } from "@/features/user/types"

type Props = {
  user: User
  no: number
}

const Row: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <div className="flex items-center justify-between gap-4 text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
)

export const UserCard: React.FC<Props> = ({ user, no }) => {
  return (
    <div className="rounded-2xl border bg-background p-4 space-y-2">
      <Row label="No" value={no} />
      <Row label="Name" value={user.name} />
      <Row label="Nomor Handphone" value={user.phone} />
      <Row label="Email" value={user.email} />
      <Row
        label="Created at"
        value={dayjs(user.createdAt).format("DD MMM YYYY, HH:mm")}
      />
    </div>
  )
}