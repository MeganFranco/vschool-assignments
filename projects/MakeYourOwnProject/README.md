##### After covering API usage, and building a few simple things, we were given a list of a few really good APIs and instructed to come up with anything we want. I chose The Dark Sky Forecast API because I heavily on (and love) their iOS app. 

##### The first problem that I ran into was that the API requries latitude and longitude for input as opposed to the city - state input that I wanted to ask the user for. Luckily the Google Maps API returns latitude and longitude when you request information for a city and state. So I ended up two APIs in stead of one.

##### The second problem I encountered was writing the logic to give the user a recommendation. Since I was using three criteria (rain, humidity, and temperature) to determine a suggestion, I had to write a nested if-statement. I'd rarely struggled with conditionals before, but I found this set quite challanging. Below is the code for the final result:

            ```` if (precipitation < .50) {
                    if (humidity < .5) {

                        if (temperature > 60) {
                            self.decision = "go outside";
                        } else {
                            self.decision = "stay warm inside";
                        }

                    } else {
                        self.decision = "stay inside, it's gross out";
                    }

                } else {
                    self.decision = "stay dry inside";
                }
                
                ```
##### What I eventually learned was that I didn't need to return a "go outside"  if-statement for each criteria. I definitely challanged myself with the logic on this app, and because of that I learned a lot.