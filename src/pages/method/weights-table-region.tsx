import {Table, TableColumnsType} from "antd";
import {MathJax} from "better-react-mathjax";
import {ColumnType} from "antd/es/table";

type TRegionWeights = {
    wN: number;
    wRA: number;
    wV: number;
    wD: number
}

const renderCell: ColumnType<TRegionWeights>["render"] = (value) => {
    return {
        children: <div style={{textAlign: 'center', fontWeight: 600}}>{value}</div>
    };
}

const regionColumns: TableColumnsType<TRegionWeights> = [
    {
        title: <p style={{textAlign: 'center'}}><MathJax inline>{"`w_N`"}</MathJax></p>,
        dataIndex: 'wN',
        render: renderCell
    },
    {
        title: <p style={{textAlign: 'center'}}><MathJax inline>{"`w_{RA}`"}</MathJax></p>,
        dataIndex: 'wRA',
        render: renderCell
    },
    {
        title: <p style={{textAlign: 'center'}}><MathJax inline>{"`w_V`"}</MathJax></p>,
        dataIndex: 'wV',
        render: renderCell
    },
    {
        title: <p style={{textAlign: 'center'}}><MathJax inline>{"`w_D`"}</MathJax></p>,
        dataIndex: 'wD',
        render: renderCell
    }
]

const regionData: Array<TRegionWeights> = [{
    wN: 0.09,
    wRA: 0.623,
    wV: 0.032,
    wD: 0.255
}]

export const WeightsTableRegion = () => {
  return (
    <Table bordered pagination={false} columns={regionColumns} dataSource={regionData}/>
  );
};