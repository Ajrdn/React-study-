import React from 'react'
import { SearchOutlined, RadiusBottomleftOutlined } from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'

export default function IconExample() {
  return (
    <div>
      <RadiusBottomleftOutlined />
      <Space direction='vertical'>
        <Space wrap>
          <Tooltip title='search'>
            <Button
              size='large'
              type='primary'
              shape='circle'
              icon={<SearchOutlined />}
            />
          </Tooltip>
          <Button
            type='primary'
            shape='circle'
          >
            A
          </Button>
          <Button
            type='primary'
            icon={<SearchOutlined />}
            loading
          >
            Search
          </Button>
          <Tooltip title='search'>
            <Button
              shape='circle'
              icon={<SearchOutlined />}
            />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Space>
        <Space wrap>
          <Tooltip title='search'>
            <Button
              shape='circle'
              icon={<SearchOutlined />}
            />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title='search'>
            <Button
              type='dashed'
              shape='circle'
              icon={<SearchOutlined />}
            />
          </Tooltip>
          <Button
            type='dashed'
            icon={<SearchOutlined />}
          >
            Search
          </Button>
          <Button
            icon={<SearchOutlined />}
            href='https://www.google.com'
          />
        </Space>
      </Space>
    </div>
  )
}
