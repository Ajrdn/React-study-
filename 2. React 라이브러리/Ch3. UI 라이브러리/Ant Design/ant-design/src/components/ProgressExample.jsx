import React from 'react'
import { Progress, Space } from 'antd'

export default function ProgressExample() {
  return (
    <>
      <Progress strokeLinecap='butt' percent={75} status='exception' />
      <Space wrap>
        <Progress strokeLinecap='butt' type='circle' percent={75} status='success' />
        <Progress strokeLinecap='butt' type='dashboard' percent={75} trailColor='red' />
      </Space>
    </>
  )
}
