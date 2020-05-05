import React from 'react';
import { Header, Table, Rating } from 'semantic-ui-react'


const TableExamplePadded = (props) => (
    <Table celled padded>
        <Table.Header>
            <Table.Row>
                {props.heading && props.heading.map((each, index) =>
                    <Table.HeaderCell singleLine key={index}>{each}</Table.HeaderCell>
                )}

            </Table.Row>
        </Table.Header>

        <Table.Body>
            {props.rows && props.rows.map((each, index) => (
                <Table.Row key={index}>
                    {each.map((eachCell, cellIndex) => (
                        <Table.Cell key={cellIndex}>{eachCell}</Table.Cell>
                    ))}
                </Table.Row>
            ))}


        </Table.Body>
    </Table>
)

export default TableExamplePadded
