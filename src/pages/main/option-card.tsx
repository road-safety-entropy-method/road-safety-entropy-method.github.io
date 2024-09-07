import {useNavigate} from "react-router-dom";
import {Button, Card, Typography} from "antd";

type TOptionCardProps = {
    title: string;
    desc: string;
    btnCalc: string;
    btnCalcLink: string;
    btnMethod: string;
    btnMethodLink: string;
}

export const OptionCard = ({
                        title,
                        desc,
                        btnCalc,
                        btnCalcLink,
                        btnMethod,
                        btnMethodLink
                    }: TOptionCardProps) => {
    const navigate = useNavigate();

    return (
        <Card>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography.Title level={3}>
                    {title}
                </Typography.Title>
                <p style={{ fontSize: '16px', marginBottom: '24px'}}>{desc}</p>
                <Button type={"primary"} size={'large'} style={{marginBottom: '16px'}} onClick={() => navigate(btnCalcLink)}>{btnCalc}</Button>
                <Button size={'large'} onClick={() => navigate(btnMethodLink)}>{btnMethod}</Button>
            </div>
        </Card>
    );
};