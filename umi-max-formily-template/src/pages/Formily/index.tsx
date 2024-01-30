import React, { useMemo } from "react"
import { createForm } from "@formily/core"
import { createSchemaField } from "@formily/react"
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards,
} from "@formily/antd"
import { Card, Slider, Rate } from "antd"
import '@formily/antd/dist/antd.css';
import 'antd/dist/antd.css';

const Text: React.FC<{
  value?: string
  content?: string
  mode?: "normal" | "h1" | "h2" | "h3" | "p"
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === "normal" || !mode ? "div" : mode
  return React.createElement(tagName, props, value || content)
}

const SchemaField = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Card,
    Slider,
    Rate,
  },
})

const FormilyPage = () => {
  const form = useMemo(() => createForm(), [])

  return (
    <Form
      form={form}
      labelCol={6}
      wrapperCol={12}
      style={{
        padding: "-1px 0px 0px 0px",
        borderTopStyle: "solid",
        borderTopWidth: "0px",
      }}
    >
      <SchemaField>
        <SchemaField.Markup
          title="Radio Group"
          x-decorator="FormItem"
          x-component="Radio.Group"
          enum={[
            { label: "选项1", value: 1 },
            { label: "选项2", value: 2 },
          ]}
          x-validator={[]}
          x-index={0}
          description="1221121212121212"
          name="58hext7nlhi"
        />
        <SchemaField.Void
          x-component="FormTab"
          x-component-props={{ "data-designer-node-id": "hgi4ewbppjg" }}
          x-index={1}
          x-pattern="editable"
          name="12211212"
        >
          <SchemaField.Void
            x-component="FormTab.TabPane"
            x-component-props={{
              tab: "Unnamed Title",
              key: "ggfpmqp45ft",
              "data-designer-node-id": "2cqb358wy4j",
            }}
            x-index={0}
            name="2cqb358wy4j"
          >
            <SchemaField.Markup
              title="Checkbox Group"
              x-decorator="FormItem"
              x-component="Checkbox.Group"
              enum={[
                { label: "选项1", value: 1 },
                { label: "选项2", value: 2 },
              ]}
              x-validator={[]}
              x-decorator-props={{ "data-designer-node-id": "s3bnx8x9awi" }}
              x-index={0}
              name="s3bnx8x9awi"
            />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="FormTab.TabPane"
            x-component-props={{
              tab: "Unnamed Title",
              key: "sjat2lhot3o",
              "data-designer-node-id": "qnoiib1bwwz",
            }}
            x-index={1}
            name="qnoiib1bwwz"
          >
            <SchemaField.String
              title="TimePicker"
              x-decorator="FormItem"
              x-component="TimePicker"
              x-validator={[]}
              x-decorator-props={{ "data-designer-node-id": "b164hbernzr" }}
              x-index={0}
              name="b164hbernzr"
            />
            <SchemaField.Number
              title="Slider"
              x-decorator="FormItem"
              x-component="Slider"
              x-decorator-props={{ "data-designer-node-id": "0qlizp6vee0" }}
              x-index={1}
              x-validator={[]}
              name="0qlizp6vee0"
            />
          </SchemaField.Void>
        </SchemaField.Void>
        <SchemaField.Number
          title="Rate"
          x-decorator="FormItem"
          x-component="Rate"
          x-validator={[]}
          x-index={2}
          name="5q3e341bbi4"
        />
        <SchemaField.Number
          title="Slider"
          x-decorator="FormItem"
          x-component="Slider"
          x-decorator-props={{ "data-designer-node-id": "62oknhgax8g" }}
          x-index={3}
          x-validator={[]}
          name="62oknhgax8g"
        />
        <SchemaField.Markup
          title="Cascader"
          x-decorator="FormItem"
          x-component="Cascader"
          x-validator={[]}
          enum={[
            {
              children: [
                { children: [], label: "选项 7", value: "f3oqv0rck1k" },
                { children: [], label: "选项 3", value: "y1daimm0e2s" },
              ],
              label: "选项 1",
              value: "3uonps2109n",
            },
            {
              children: [
                { children: [], label: "选项 4", value: "dcfxmzd9r1c" },
              ],
              label: "选项 2",
              value: "y972a2z6sbj",
            },
            {
              children: [
                {
                  children: [
                    { children: [], label: "选项 5", value: "lq8f6zpvh61" },
                  ],
                  label: "选项 6",
                  value: "ontoy364iyu",
                },
              ],
              label: "选项 5",
              value: "d7vx50k4j5s",
            },
            {
              children: [
                {
                  children: [
                    { children: [], label: "选项 5", value: "7fim6mnvvvy" },
                  ],
                  label: "选项 6",
                  value: "d59eg2dtyv6",
                },
              ],
              label: "选项 4",
              value: "3hco5qjslyc",
            },
          ]}
          x-index={4}
          description="qwwqqwqwqwqwqw"
          name="js98mu7srbp"
        />
        <SchemaField.Boolean
          title="Switch"
          x-decorator="FormItem"
          x-component="Switch"
          x-validator={[]}
          x-index={5}
          name="4n25dvhewx8"
        />
        <SchemaField.Markup
          title="Checkbox Group"
          x-decorator="FormItem"
          x-component="Checkbox.Group"
          enum={[
            { children: [], label: "选项1", value: 1 },
            { children: [], label: "选项2", value: 2 },
            { children: [], label: "选项 3", value: "8499lfnv8o3" },
            { children: [], label: "选项 4", value: "z21yoblp980" },
            { children: [], label: "选项 5", value: "kbo50d1l9p5" },
            { children: [], label: "选项 6", value: "z4tilwovcyr" },
            { children: [], label: "选项 7", value: "6rehsach6cp" },
          ]}
          x-validator={[]}
          x-index={6}
          name="80acydqkh27"
        />
        <SchemaField.Markup
          title="TreeSelect"
          x-decorator="FormItem"
          x-component="TreeSelect"
          x-validator={[]}
          enum={[
            { children: [], label: "选项 1", value: "fxx0rxpb9d7" },
            { children: [], label: "选项 2", value: "b30iygyq5s7" },
            { children: [], label: "选项 3", value: "j1kz3p1vbzq" },
            { children: [], label: "选项 4", value: "txyx18yhmzl" },
            { children: [], label: "选项 5", value: "6s23viboc6u" },
            { children: [], label: "选项 6", value: "n7yfywzfv02" },
          ]}
          x-index={7}
          description="121212122112"
          name="kpnk9fnqbq3"
        />
      </SchemaField>
    </Form>
  )
}


export default FormilyPage;