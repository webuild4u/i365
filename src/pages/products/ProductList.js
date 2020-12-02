import React from "react";
import { addItemToCart } from "../../store/actions/CartActions";
import { getProducts } from "../../store/actions/ProductActions";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import Grid from "@material-ui/core/Grid";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadItems(1);
  }

  handleClick = (item) => {
    item.quantity = 1;
    this.props.addItemToCart(item);
  };

  render() {
    let itemList = this.props.items.map((item) => (
      <Grid key={item.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Card className={this.props.classes.root} style={{ width: "280px" }}>
          <CardActionArea>
            <CardMedia
              className={this.props.classes.media}
              image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Jeep-Renegade/5556/1551074202602/front-left-side-47.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <img
                src={item.imageUrl}
                style={{ width: "250px", height: "200px" }}
                alt={item.name}
              />
              {/* <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}

            <Button
              size="small"
              color="primary"
              onClick={() => {
                this.handleClick(item);
              }}
            >
              {"Add to Cart"}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      //   <GridListTile key={item.id}>
      //     {/* <img src={tile.img} alt={tile.title} /> */}
      //     <GridListTileBar
      //       title={item.title}
      //       actionIcon={
      //         <IconButton
      //           onClick={() => {
      //             this.handleClick(item.id);
      //           }}
      //           aria-label={`info about ${item.title}`}
      //           className={this.props.classes.icon}
      //         >
      //           <InfoIcon />
      //         </IconButton>
      //       }
      //     />
      //   </GridListTile>
    ));
    // let itemList = this.props.items.map((item) => {
    //   return (
    //     <div className="card" key={item.id}>
    //       <div className="card-image">
    //         <img src={item.img} alt={item.title} />
    //         <span className="card-title">{item.title}</span>
    //         <span
    //           to="/"
    //           className="btn-floating halfway-fab waves-effect waves-light red"
    //         >
    //           <i
    //             className="material-icons"
    //             onClick={() => {
    //               this.handleClick(item.id);
    //             }}
    //           >
    //             add
    //           </i>
    //         </span>
    //       </div>

    //       <div className="card-content">
    //         <p>{item.desc}</p>
    //         <p>
    //           <b>Price: {item.price}$</b>
    //         </p>
    //       </div>
    //     </div>
    //   );
    // });

    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={5} style={{ padding: "12px" }}>
          {itemList}
        </Grid>
      </div>
      //   <div className="container">
      //     <h3 className="center">Products</h3>
      //     <div className="box">{itemList}</div>
      //   </div>
    );
  }
}

const mapStateToProps = (state) => {
  //items: state.cart.items,
  return {
    items: state.products.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => {
      dispatch(addItemToCart(item));
    },
    loadItems: (id) => {
      dispatch(getProducts(id));
    },
  };
};

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductsList);
//export default connect(mapStateToProps, mapDispatchToProps)(ProductsList));
//export default (withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(ProductsList)));
