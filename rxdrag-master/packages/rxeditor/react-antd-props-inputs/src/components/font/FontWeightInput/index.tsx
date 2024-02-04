import React from "react"
import { InputNumber } from "antd"
import { memo } from "react"
import { FoldExtraItem } from "../../Fold/FoldExtraItem"

export const fontWeightIcon = `<svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M693.505588,190 C724.805588,190 746.305588,207.1 758.805588,234.8 L758.805588,234.8 L991.505588,753.9 C996.005588,762 997.805588,770 997.805588,777.2 C997.805588,806.7 975.405588,830 945.905588,830 C920.005588,830 902.105588,814.8 892.105588,791.6 L892.105588,791.6 L841.105588,674.3 L582.273,674.3 L630.105588,784 C637.805588,801.7 629.705588,822.3 612.005588,830.1 C607.405588,832.1 602.705588,833 598.005588,833 C584.505588,833 571.605588,825.1 565.905588,812 L521.33,709.704 L484.005588,795.1 C475.194588,817.276 456.680598,829.74901 433.703232,829.996253 L433.005588,830 C404.405588,830 382.005588,807.6 382.005588,779 C382.005588,770.9 384.705588,762.9 389.205588,753.9 L389.205588,753.9 L430.85,661 L162.005588,661 C161.540572,661 161.077646,660.990886 160.61698,660.972827 L92.9055878,812.3 C85.0055878,829.9 64.3055878,837.9 46.7055878,830 C29.1055878,822.1 21.2055878,801.4 29.0055878,783.8 L273.305588,237.8 C287.905588,205.1 326.505588,190.4 359.205588,205 C374.005588,211.6 385.805588,223.5 392.205588,238.4 L504.67,496.325 L621.905588,234.8 C634.280588,207.278 656.358578,190.34108 687.169259,190.005094 L688.105588,190 Z M332.605588,276.6 L191.926,591 L462.229,591 L465.969,582.657 L332.605588,276.6 Z M689.005588,323.4 L578.905588,576.7 L799.105588,576.7 L689.005588,323.4 Z"></path></svg>`

export const FontWeightInput = memo((props: {
  title?: string,
  span?: number,
  value?: string,
  onChange?: (value?: string | null) => void
}) => {
  const { title, value, onChange, span = 12 } = props
  return (
    <FoldExtraItem span={span}
      title={title}
      icon={fontWeightIcon}
    >
      <InputNumber value={value} onChange={onChange} />
    </FoldExtraItem>
  )
})