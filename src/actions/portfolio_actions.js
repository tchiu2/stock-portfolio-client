import * as APIUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";

const receivePortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio,
});

export const fetchPortfolio = userId => dispatch => (
  APIUtil.fetchPortfolio(userId)
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
);
