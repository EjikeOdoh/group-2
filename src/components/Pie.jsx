import { Gauge, gaugeClasses } from '@mui/x-charts'
import React from 'react'

export default function Pie(props) {
    return (
        <Gauge
            width={props.size || 140}
            height={props.size || 140}
            value={props.value}
            startAngle={0}
            endAngle={360}
            innerRadius="85%"
            outerRadius="100%"
            sx={{
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: (theme) => props.value < 50 ? '#EE443F' : "#43B75D",
                },
                fontFamily:'inherit'
            }}
            text={props.value < 50 ? "High Risk" : "Low Risk"}
        />
    )
}
