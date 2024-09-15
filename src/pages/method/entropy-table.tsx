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
    successBgHover: string;
    successText: string;
    successTextActive: string;
    infoBg: string;
    infoText: string;
    warningBg: string;
    warningText: string;
    errorBg: string;
    errorText: string;
}

const getColumns = ({successBg, successBgHover, successText, successTextActive, infoBg, infoText, warningBg, warningText, errorBg, errorText}: TColors): TableColumnsType<TEntropyTableData> => {
    const columns: TableColumnsType<TEntropyTableData> = [
        {
            title: <p style={{color: successTextActive, textAlign: 'center'}}>Очень высокий уровень организованности - класс I</p>,
            dataIndex: 'highest',
            render: (value) => {
                return {
                    props: {
                        style: { color: successTextActive, background: successBgHover, textAlign: 'center'}
                    },
                    children: <div style={{fontWeight: 600}}>{value}</div>
                };
            }
        },
        {
            title: <p style={{color: successText}}>Высокий уровень организованности - класс II</p>,
            children: [
                {
                    title: <p style={{color: successText, textAlign: 'center'}}>Класс II-1</p>,
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
                    title: <p style={{color: successText, textAlign: 'center'}}>Класс II-2</p>,
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
            title: <p style={{color: infoText, textAlign: 'center'}}>Средний уровень организованности - класс III</p>,
            children: [
                {
                    title: <p style={{color: infoText, textAlign: 'center'}}>Класс III-1</p>,
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
                    title: <p style={{color: infoText, textAlign: 'center'}}>Класс III-2</p>,
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
            title: <p style={{color: warningText, textAlign: 'center'}}>Низкий уровень организованности - класс IV</p>,
            children: [
                {
                    title: <p style={{color: warningText, textAlign: 'center'}}>Класс IV-1</p>,
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
                    title: <p style={{color: warningText, textAlign: 'center'}}>Класс IV-2</p>,
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
            title: <p style={{color: errorText, textAlign: 'center'}}>Очень низкий уровень организованности - класс V</p>,
            dataIndex: 'lowest',
            render: (value) => {
                return {
                    props: {
                        style: {color: errorText, background: errorBg, textAlign: 'center'}
                    },
                    children: <div style={{fontWeight: 600}}>{value}</div>
                };
            }
        },
    ];
    return columns;
}

type TProps = {
    data: TEntropyTableData;
}

export const EntropyTable = ({data}: TProps) => {
    const {
        token: { colorSuccessBg, colorSuccessBgHover, colorSuccessText, colorSuccessTextActive, colorWarningBg, colorWarningBgHover, colorWarningText, colorWarningTextActive, colorInfoBg, colorInfoText, colorErrorBg, colorErrorText },
    } = theme.useToken();

  return (
       <Table pagination={false} bordered columns={getColumns({
           successBg: colorSuccessBg,
           successBgHover: colorSuccessBgHover,
           successText: colorSuccessText,
           successTextActive: colorSuccessTextActive,
           warningBg: colorWarningBg,
           warningText: colorWarningText,
           errorBg: colorErrorBg,
           errorText: colorErrorText,
           infoBg: colorInfoBg,
           infoText: colorInfoText
       })} dataSource={[data]}/>
  );
};