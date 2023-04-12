
import { ReferenceInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm } from 'react-admin';


const productFilters = [
    <TextInput source = "q" Label="Search" alwaysOn />,
    <ReferenceInput source="postal" label="Postal" reference="product" allowEmpty>
        <SelectInput optionText="postal" />
    </ReferenceInput>
];

export const ProductList = (props) => {
    <List filters={productFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="precio" />
            <TextField source="postal" />
            <TextField source="Imagen" />
        </Datagrid>
    </List>
};

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="precio" />
            <TextInput source="postal" />
            <TextField source="Imagen" />

        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="name" />
        <TextInput source="precio" />
        <TextInput source="postal" />
        <TextField source="Imagen" />

        </SimpleForm>
    </Create>
);