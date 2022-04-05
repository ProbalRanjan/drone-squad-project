import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../hooks/useChart';
import './Dashboard.css';

const Dashboard = () => {

    const [data, setData] = useChart()

    return (
        <div className='dashboard-container container'>
            <div className='dashboard-title'>
                <h2>DashBoard</h2>
            </div>
            <section className='chart-container'>
                <div className="line-chart">
                    <p>Line Chart</p>
                    <ResponsiveContainer>
                        <LineChart
                            width={600}
                            height={400}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>

                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="investment" stroke="#1380C7" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="revenue" stroke="#00BDFE" />
                            <Line type="monotone" dataKey="sell" stroke="#84E4F7" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bar-chart">
                    <p>Bar Chart</p>
                    <ResponsiveContainer>
                        <BarChart
                            width={600}
                            height={400}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" fill="#1380C7" />
                            <Bar dataKey="revenue" fill="#00BDFE" />
                            <Bar dataKey="sell" fill="#84E4F7" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="pie-chart">
                    <p>Pie Chart</p>
                    <ResponsiveContainer>
                        <PieChart width={400} height={400}>
                            <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#1380C7" />
                            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#00BDFE" label />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="area-chart">
                    <p>Area Chart</p>
                    <ResponsiveContainer>
                        <AreaChart
                            width={600}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#1380C7" fill="#1380C7" />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#00BDFE" fill="#00BDFE" />
                            <Area type="monotone" dataKey="sell" stackId="1" stroke="#84E4F7" fill="#84E4F7" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;