import blueVirus from "../SVGs/blueVirus.svg";
import redVirus from "../SVGs/redVirus.svg";
import darkVirus from "../SVGs/darkVirus.svg";

import trendingUp from "../SVGs/trendingUp.svg";
import trendingDown from "../SVGs/trendingDown.svg";

import usa from "../SVGs/flags/USA.svg";
import spain from "../SVGs/flags/Spain.svg";
import italy from "../SVGs/flags/Italy.svg";
import germany from "../SVGs/flags/Germany.svg";
import china from "../SVGs/flags/China.svg";
import france from "../SVGs/flags/France.svg";
import iran from "../SVGs/flags/Iran.svg";
import uk from "../SVGs/flags/UK.svg";

import spread from "../SVGs/spread/spread.svg";
import sneezes from "../SVGs/spread/sneezes.svg";
import sore from "../SVGs/spread/sore.svg";

import dry from "../SVGs/symptoms/dry.svg";
import fever from "../SVGs/symptoms/fever.svg";

import { mask, sanitizer, stayHome } from "../images/blog";

export const virusStatus = [
    {
        img: redVirus,
        title: "Total Coronavirus Cases",
        num: "1,245,347",
        percent: "95%",
        trend: trendingUp,
        red: true,
    },
    {
        img: blueVirus,
        title: "Total Recovered",
        num: "259,544",
        percent: "79%",
        trend: trendingDown,
        red: false,
    },
    {
        img: darkVirus,
        title: "Total Deaths",
        num: "68,184",
        percent: "21%",
        trend: trendingUp,
        red: true,
    },
]

export const countries = [
    {
        img: usa,
        country: 'United States',
        num: '321,020',
    },
    {
        img: spain,
        country: 'Spain',
        num: '130,759',
    },
    {
        img: italy,
        country: 'Italy',
        num: '128,948',
    },
    {
        img: germany,
        country: 'Germany',
        num: '97,351',
    },
    {
        img: china,
        country: 'China (mailand)',
        num: '81,669',
    },
    {
        img: france,
        country: 'France',
        num: '68,605',
    },
    {
        img: iran,
        country: 'Iran',
        num: '58,226',
    },
    {
        img: uk,
        country: 'United Kingdom',
        num: '47,806',
    },
];

export const Spread = [
    {
        img: spread,
        title: 'Person-to-person spread',
        desc: 'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.'
    },
    {
        img: sneezes,
        title: 'Person coughs or sneezes',
        desc: 'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.'
    },
    {
        img: sore,
        title: 'Sore Throat',
        desc: 'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.'
    },
]

export const symptoms = [
    {
        img: fever,
        title: 'Fever',
        desc: 'High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.'
    },
    {
        img: dry,
        title: 'Dry cough',
        desc: 'Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).'
    },
    {
        img: sore,
        title: 'Sore Throat',
        desc: 'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.'
    },
]

export const blogs = [
    {
        img: mask,
        title: 'Wearing face mask working',
        desc: 'If you wear a mask, then you must know how to use it and dispose of it properly. When…',
        time: '10 Mar 2020',
    },
    {
        img: sanitizer,
        title: 'Cleaning hands with sanitizer',
        desc: 'Washing your hands can protect you and your ... Also, alcohol-based hand sanitizer kills the coronavirus…',
        time: '21 Oct 2020',
    },
    {
        img: stayHome,
        title: 'Stay home',
        desc: 'Stay home. Save lives.​. As COVID-19 continues to impact communities around the world…',
        time: '15 May 2020',
    },
]