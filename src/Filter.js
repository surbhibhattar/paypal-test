import React from 'react'
import { Checkbox, Container } from 'semantic-ui-react'

const Filter = () => {

    return (
        <Container style={{ marginTop: "10px" }}>
            <label>Filter by Cuisines</label><br />
            <Checkbox label='A' style={{ marginRight: "10px" }} />
            <Checkbox label='B' />
        </Container>
    )

}

export default Filter;