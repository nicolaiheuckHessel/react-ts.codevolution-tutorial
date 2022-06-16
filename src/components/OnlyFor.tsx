import React from 'react'

type OnlyForType = {
  children: React.ReactNode
  role: "admin" | "user" | "guest"
}
type OnlyForTypeAdmins = OnlyForType & {
  admins: boolean
  users?: never
  guests?: never
}
type OnlyForTypeUsers = OnlyForType & {
  admins?: never
  users: boolean
  guests?: never
}
type OnlyForTypeGuests = OnlyForType & {
  admins?: never
  users?: never
  guests: boolean
}

type OnlyForProps = OnlyForTypeAdmins | OnlyForTypeUsers | OnlyForTypeGuests

const OnlyFor = (props: OnlyForProps) => {
  debugger;
  let isAuthorized: boolean | undefined = false;
  isAuthorized = isAuthorized || (props.role === "admin" && props.admins === true);
  isAuthorized = isAuthorized || (props.role === "user" && props.users === true);
  isAuthorized = isAuthorized || (props.role === "guest" && props.guests === true);
  return (
    <div>{isAuthorized && props.children}</div>
  )
}

export default OnlyFor