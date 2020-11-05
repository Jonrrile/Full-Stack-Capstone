import Faq from 'react-faq-component';
import React, { useContext, useEffect } from "react";
import { Jumbotron } from 'react-bootstrap';

const faq = () => {

    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "What is sports betting?",
                content: "Sports betting is the activity of predicting sports results and placing a wager on the outcome. The frequency of sports bet upon varies by culture, with the vast majority of bets being placed on association football, American football, basketball, baseball, hockey, track cycling, auto racing, mixed martial arts, and boxing at both the amateur and professional levels. Sports betting can also extend to non-athletic events, such as reality show contests and political elections - It is not uncommon for sports betting websites to offer wagers for entertainment events such as the Grammy Awards, the Oscars, and the Emmy Awards. Sports bettors place their wagers through a bookmaker/ sportsbook.The term book is a reference to the books used by wagebrokers to track wagers, payouts, and debts.Many legal sportsbooks are found online, operated over the Internet from jurisdictions separate from the clients they serve, usually to get around various gambling laws(such as the Unlawful Internet Gambling Enforcement Act of 2006 in the United States) in select markets, such as Las Vegas, Nevada, or on gambling cruises through self - serve kiosks.They take bets up- front, meaning the bettor must pay the sportsbook before placing the bet."
            },
            {
                title: "How do I bet on sports?",
                content: "When the oddsmakers release a betting line on a game, the first thing they do is decide which team should be the favorite and which should be the underdog.The favorite is the team that is expected to win the game and will get a minus sign next to its odds, while the underdog is expected to lose and gets a plus sign. If the game is a toss-up, books will open it as a pick or pick’em.                   Favorites are given a “minus” designation, such as -150, -200 or -500. If a favorite is -200, that means you have to risk $200 to win $100. If the favorite wins, you get $100, but if the favorite loses, you’re out $200. Because favorites are expected to win, you assume more risk when betting on them.Underdogs are given a “plus” designation, such as +150, +200 or +500. If an underdog is +200, that means if you bet $100 on them and they win the game, you get $200. If they lose the game, you lose only the $100 that you risked. Because underdogs are expected to lose, there is more of a reward when betting on them."
            },
            {
                title: "In what states is sports betting legal?",
                content: "Currently sports betting is legal in Arkansas, Colorado, Delaware, Illinois, Indiana, Iowa, Michigan, Mississippi, Montana, Nevada, New Hampshire, New Jersey, New York, New Mexico, Oregon, Pennsylvania, Rhode Island, West Virginia, Washington, D.C., and Tennessee."
            },
            {
                title: "More resources.",
                content: "https://www.actionnetwork.com/how-to-bet-on-sports/general/sports-betting-for-beginners-10-things-to-know"
            }]
    }

    return (
        <div>
            < Jumbotron className="jumbotron" > <h1><i>BetOnIt!</i></h1></Jumbotron>
            <Faq data={data} />
        </div >
    )

}

export default faq;