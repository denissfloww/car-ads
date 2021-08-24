import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Ad } from "../../interfaces/Ad";
import { appendAdLink } from "../../Links";
import { selectAdState } from "../../redux/slices/adSlice";
import { usePersonalAccountStyles } from "../../styles/muiStyles";
import SkeletonUserAdCard from "./SkeletonUserAdCard";
import UserAdCard from "./UserAdCard";

const UserAdCatalog = () => {
  const classes = usePersonalAccountStyles();
  const { userAds, userAdsLoading } = useSelector(selectAdState)
  return (
    <Container maxWidth="md" className={classes.cardGrid}>
      <Grid container spacing={2}>
        {userAdsLoading ? (
          Array(10).fill(0).map((item, i) => (
              <SkeletonUserAdCard />
            )
          )
        ): (
          userAds.length? (
            userAds.map((ad: Ad) => (
              <UserAdCard
                id={ad.id}
                description={ad.description}
                price={ad.price}
                brand={ad.modification.model.brand.name}
                model={ad.modification.model.name}
                countOwners={ad.ownersCount}
                images={
                  ad.adImages
                }/>
            ))
          ) : (
            <div className={classes.noAdsBlock}>
              <p>У вас пока нет объявлений</p>
              <p>
                <Button variant="contained" color="primary" to={appendAdLink} component={RouterLink}>
                  Подать
                </Button>
              </p>
            </div>
          )
        )}
      </Grid>
    </Container>
  )
}

export default UserAdCatalog