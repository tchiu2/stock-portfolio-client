import * as APIUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";
export const REQUEST_PORTFOLIO = "REQUEST_PORTFOLIO";

const requestPortfolio = () => ({
	type: REQUEST_PORTFOLIO,
})
const receivePortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio,
});

export const fetchPortfolio = userId => dispatch => {
  dispatch(requestPortfolio());
  return APIUtil.fetchPortfolio(userId)
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
};
