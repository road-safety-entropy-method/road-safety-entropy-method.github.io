import {Table, TableColumnsType} from "antd";
import {MathJax} from "better-react-mathjax";
import {ColumnType} from "antd/es/table";

type TCityWeights = {
    wRA: number;
    wV: number;
    wD: number
}

const renderCell: ColumnType<TCityWeights>["render"] = (value) => {
    return {
        children: <div style={{textAlign: 'center', fontWeight: 600}}>{value}</div>
    };
}

const cityColumns: TableColumnsType<TCityWeights> = [
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

const cityData: Array<TCityWeights> = [{
    wRA: 0.677,
    wV: 0.015,
    wD: 0.309
}]

export const WeightsTableCity = () => {
    return (
        <Table bordered pagination={false} columns={cityColumns} dataSource={cityData}/>
    );
};