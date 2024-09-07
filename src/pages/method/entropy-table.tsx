import {Table, TableColumnsType, theme} from "antd";

export type TEntropyTableData = {
    highest: string;
    highOne: string;
    highTwo: string;
    mediumOne: string;
    mediumTwo: string;
    lowOne: string;
    lowTwo: string;
    lowest: string;
}

type TColors = {
    successBg: string;
    successText: string;
    infoBg: string;
    infoText: string;
    warningBg: string;
    warningText: string;
}

const getColumns = ({successBg, successText, infoBg, infoText, warningBg, warningText}: TColors): TableColumnsType<TEntropyTableData> => {
    const columns: TableColumnsType<TEntropyTableData> = [
        {
            title: <p style={{color: successText}}>Очень высокий уровень организованности - класс I</p>,
            dataIndex: 'highest',
            render: (value) => {
                return {
                    props: {
                        style: { color: successText, background: successBg, textAlign: 'center'}
                    },
                    children: <div style={{fontWeight: 600}}>{value}</div>
                };
            }
        },
        {
            title: <p style={{color: successText}}>Высокий уровень организованности - класс II</p>,
            children: [
                {
                    title: <p style={{color: successText}}>Класс II-1</p>,
                    dataIndex: 'highOne',
                    render: (value) => {
                        return {
                            props: {
                                style: {color: successText, background: successBg, textAlign: 'center'}
                            },
                            children: <div style={{fontWeight: 600}}>{value}</div>
                        };
                    }
                },
                {
                    title: <p style={{color: successText}}>Класс II-2</p>,
                    dataIndex: 'highTwo',
                    render: (value) => {
                        return {
                            props: {
                                style: {color: successText, background: successBg, textAlign: 'center'}
                            },
                            children: <div style={{fontWeight: 600}}>{value}</div>
                        };
                    }
                },
            ]
        },
        {
            title: <p style={{color: infoText}}>Средний уровень организованности - класс III</p>,
            children: [
                {
                    title: <p style={{color: infoText}}>Класс III-1</p>,
                    dataIndex: 'mediumOne',
                    render: (value) => {
                        return {
                            props: {
                                style: {color: infoText, background: infoBg, textAlign: 'center'}
                            },
                            children: <div style={{fontWeight: 600}}>{value}</div>
                        };
                    }
                },
                {
                    title: <p style={{color: infoText}}>Класс III-2</p>,
                    dataIndex: 'mediumTwo',
                    render: (value) => {
                        return {
                            props: {
                                style: {color: infoText, background: infoBg, textAlign: 'center'}
                            },
                            children: <div style={{fontWeight: 600}}>{value}</div>
                        };
                    }
                },
            ]
        },
        {
            title: <p style={{color: warningText}}>Низкий уровень организованности - класс IV</p>,
            children: [
                {
                    title: <p style={{color: warningText}}>Класс IV-1</p>,
                    dataIndex: 'lowOne',
                    render: (value) => {
                        return {
                            props: {
                                style: {color: warningText, background: warningBg, textAlign: 'center'}
                            },
                            children: <div style={{fontWeight: 600}}>{value}</div>
                        };
                    }
                },
                {
                    title: <p style={{color: warningText}}>Класс IV-2</p>,
                    dataIndex: 'lowTwo',
                    render: (value) => {
                        return {
                            props: {
                                style: {color: warningText, background: warningBg, textAlign: 'center'}
                            },
                            children: <div style={{fontWeight: 600}}>{value}</div>
                        };
                    }
                },
            ]
        },
        {
            title: <p style={{color: warningText}}>Очень низкий уровень организованности - класс V</p>,
            dataIndex: 'lowest',
            render: (value) => {
                return {
                    props: {
                        style: {color: warningText, background: warningBg, textAlign: 'center'}
                    },
                    children: <div style={{fontWeight: 600}}>{value}</div>
                };
            }
        },
    ];
    return columns;
}


// const data: TDataType[] = [
//     {
//         highest: 1,
//         highOne: 2,
//         highTwo: 3,
//         mediumOne: 4,
//         mediumTwo: 5,
//         lowOne: 6,
//         lowTwo: 7,
//         lowest: 8
//     },
// ]

type TProps = {
    data: TEntropyTableData;
}

export const EntropyTable = ({data}: TProps) => {
    const {
        token: { colorSuccessBg, colorSuccessText, colorWarningBg, colorWarningText, colorInfoBg, colorInfoText },
    } = theme.useToken();

  return (
       <Table pagination={false} bordered columns={getColumns({
           successBg: colorSuccessBg,
           successText: colorSuccessText,
           warningBg: colorWarningBg,
           warningText: colorWarningText,
           infoBg: colorInfoBg,
           infoText: colorInfoText
       })} dataSource={[data]}/>
  );
};