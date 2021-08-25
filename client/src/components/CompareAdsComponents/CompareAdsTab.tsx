import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CompareTable from "./CompareTable";
import CompareChart from "./CompareChart";


const CompareAdsTab = () => {

    return (
        <Grid container>
            <Grid item md>
                <Typography variant="h5" id="tableTitle" component="div">
                    Характеристики сравниваемых автомобилей
                </Typography>
                <CompareTable />
                <Grid container md justify="flex-end" style={{marginTop:'3%'}}>
                    <Button variant="contained" color="secondary" style={{backgroundColor:'#4CAF50'}}>
                        Экспорт в Excel
                    </Button>
                </Grid>
                <Grid container md justify="center" style={{marginTop:'15%'}}>
                    <CompareChart />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default CompareAdsTab;