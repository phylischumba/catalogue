/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDrinks } from '../actions/index';
import Drink from './Drink';

const DrinkList = ({ getDrinks, drinks }) => {
  useEffect(() => {
    getDrinks();
  });

  return (
    <div>
      {drinks.map(drink => (
        <Drink key={drink.idDrink} drink={JSON.stringify(drink.strAlcoholic)} />
        // JSON.stringify(drink)
      ))}
    </div>
  );
};

DrinkList.propTypes = {
  drinks: PropTypes.array.isRequired,
  getDrinks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  drinks: state.drinks.drinks,
});

export default connect(mapStateToProps, { getDrinks })(DrinkList);
