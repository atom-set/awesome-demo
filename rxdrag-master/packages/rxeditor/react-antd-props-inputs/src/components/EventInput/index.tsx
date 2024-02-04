import React from "react"
import { Button } from "antd"
import { memo } from "react"

export const EventInput = memo((props: {
  title: string
}) => {
  const { title, ...other } = props;
  return (
    <Button {...other}>{title}</Button>
  )
})