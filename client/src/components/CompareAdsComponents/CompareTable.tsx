import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const CompareTable = () => {

    return (
        <TableContainer style={{marginTop: '2%'}}>
            <Table aria-label="a dense table">
                <TableHead>
                    <TableRow style={{backgroundColor: '#f6f5f5'}}>
                        <TableCell><b>Автомобиль</b></TableCell>
                        <TableCell ><b>Привод</b></TableCell>
                        <TableCell ><b>Год выпуска</b></TableCell>
                        <TableCell ><b>Количество владельцев</b></TableCell>
                        <TableCell ><b>Мощность</b></TableCell>
                        <TableCell ><b>Объем двигателя</b></TableCell>
                        <TableCell ><b>Двигатель</b></TableCell>
                        <TableCell ><b>Коробка передач</b></TableCell>
                        <TableCell ><b>Цена</b></TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell>Автомобиль</TableCell>
                        <TableCell >Привод</TableCell>
                        <TableCell >Год выпуска</TableCell>
                        <TableCell >Количество владельцев</TableCell>
                        <TableCell >Мощность</TableCell>
                        <TableCell >Объем двигателя</TableCell>
                        <TableCell >Двигатель</TableCell>
                        <TableCell >Коробка передач</TableCell>
                        <TableCell >Цена</TableCell>
                        <TableCell ><DeleteOutlineIcon /></TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell>Автомобиль</TableCell>
                        <TableCell >Привод</TableCell>
                        <TableCell >Год выпуска</TableCell>
                        <TableCell >Количество владельцев</TableCell>
                        <TableCell >Мощность</TableCell>
                        <TableCell >Объем двигателя</TableCell>
                        <TableCell >Двигатель</TableCell>
                        <TableCell >Коробка передач</TableCell>
                        <TableCell >Цена</TableCell>
                        <TableCell ><DeleteOutlineIcon /></TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell>Автомобиль</TableCell>
                        <TableCell >Привод</TableCell>
                        <TableCell >Год выпуска</TableCell>
                        <TableCell >Количество владельцев</TableCell>
                        <TableCell >Мощность</TableCell>
                        <TableCell >Объем двигателя</TableCell>
                        <TableCell >Двигатель</TableCell>
                        <TableCell >Коробка передач</TableCell>
                        <TableCell >Цена</TableCell>
                        <TableCell ><DeleteOutlineIcon /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default CompareTable;
