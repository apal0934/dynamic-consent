import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import LoadingScreen from "react-loading-screen";
import { Table, Icon } from "antd";

const GET_CONSENTS = gql`
    query {
        consents {
            id
            name
            purpose
            commercial
        }
    }
`;

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Purpose",
        dataIndex: "purpose",
        key: "purpose"
    },
    {
        title: "Commercial",
        dataIndex: "commercial",
        key: "commercial",
        render: record =>
            record ? <Icon type="check" /> : <Icon type="close" />
    }
];

const Consents = () => {
    const { data, loading, error } = useQuery(GET_CONSENTS);
    if (loading) return <LoadingScreen loading={true}></LoadingScreen>;
    if (error) return <p>error!</p>;
    if (!data) return <p>cnf</p>;
    if (!data.consents) return <p>cnfc</p>;

    return <Table columns={columns} dataSource={data.consents} rowKey="id" />;
};

export default Consents;
