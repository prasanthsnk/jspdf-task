/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { preparePdf } from "@cloudninecare/prescription-generator-lib";

const App = () => {

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const input = {
      meta: {
        hospital: {
          name: "Cloudnine Hospital T Nagar",
          address: "54, Vijaya Raghava Road, TNagar, Chennai 600017",
          logoUrl: "",
          cityName: "Chennai",
          siteCode: "C9-CHN",
          pinCode: "600017",
          location: "T Nagar",
        },
        doctor: {
          name: "Dr Kalyanraddi Chikkagoudar",
          qualification: "MBBS, DCH DNB(Paeds), DNB (Paediatric Cordiology)",
          medicalCouncilRegNo: "KMC: 90616",
          email: "kalyanraddic@cloudninecare.com",
          lifetrenzId: "13009",
          phoneNumber: "9029445166",
          gender: "Male",
          department: "Pediatrics",
          primarySpeciality: "Pediatric specialty",
          secondarySpeciality: "Cardiology",
          displaySpecialty: "Pediatric Specialty",
        },
        user: {
          mpid: "1000000101618065",
          mobile: "8073102303",
          first_name: "Kani Devi",
          last_name: "M",
          date_of_birth: "2005-11-10T04:36:44.173Z",
          gender: "Female",
          email: "",
        },
      },
      symptoms: [
        {
          name: "fever",
          aliases: ["distemperature", "infirmity", "malady", "sickness", "trouble"],
          duration: "2d",
          notes: "lorem ipsum asdflksadf askldjsafdkl",
          severity: "moderate",
          options: [
            {
              name: "Associated Symptoms",
              type: "checkbox",
              values: ["Shivering", "Pain"],
            },
            {
              name: "Temperature",
              type: "value",
              value: "108",
              unit: "°F",
            },
            { name: "Variance", type: "radio", value: "Continuous" },
          ],
        },
        {
          name: "commoncold",
          aliases: [
            "acute rhinitis",
            "catarrh",
            "coryza",
            "acute viral nasopharyngitis",
            "cold",
          ],
          duration: "2d",
          notes: "lorem ipsum abcdefghijklmnopqrstuvwxyz",
          severity: "moderate",
          options: [
            {
              name: "Associated Symptoms",
              type: "checkbox",
              values: ["Runny nose", "Sore throat"],
            },
          ],
        },
      ],
      diagnosis: [
        {
          name: "Hypothyroidism",
          aliases: ["Underactive Thyroid", "TSH Test"],
          options: [{ name: "Process", type: "radio", value: "Acquired" }],
          notes: "lorem ipsum asfd asflk asdfl asdflkas asfdlksaf",
          location: "Neck",
          confidenceLevel: "confirmed",
        },
      ],
    };

    console.log(preparePdf(input));
  }

  return (
    <View>
      <Text>Pdf Task</Text>
    </View>
  );
}

export default App;
