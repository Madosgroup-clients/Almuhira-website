const sesctionsToBeRendered = [
    `<div class="fieldset_section">
    <fieldset form="applicationForm">
        <legend>Section A : Eligibility to work in Canada</legend>
        <p>Please indicate your eligibility to work in Canada</p>
        <div class="input_wrapper checkbox">
            <div class="single_input">
                <input type="radio" name="eligibility options" id="pe">
                <label for="pe">Permanent eligibility(i.e. Canadian Citizen, Permanent Resident)</label>
            </div>
            <div class="single_input">
                <input type="radio" class="radio" name="eligibility options" id="crwp">
                <label for="crwp">Current valid work permit</label>
            </div>
            <div class="single_input">
                <input type="radio" name="eligibility options" id="eawp">
                <label for="eawp">Eligible to apply for a work permit</label>
            </div>
            <div class="single_input">
                <input type="radio" name="eligibility options" id="nec">
                <label for="nec">Not eligible to work in Canada</label>
            </div>
        </div>
    </fieldset>
    <fieldset form="applicationForm">
        <legend>Section B: Personal Data</legend>
        <p>Please provide your identity and current location information</p>
        <div class="input_wrapper">
            <div class="input_container">
                <div class="single_input">
                    <label for="lastname">Last Name</label>
                    <input type="text" name="Lastname" id="lastname" placeholder="lastname" required>
                </div>
                <div class="single_input">
                    <label for="firstname">First Name</label>
                    <input type="text" name="Firstname" id="firstname" placeholder="firstname" required>
                </div>
                <div class="single_input">
                    <label for="initial">Initial</label>
                    <input type="text" name="Initial" id="initial" placeholder="initial" required>
                </div>
            </div>
            <div class="input_container">
                <div class="single_input">
                    <label for="homephone">Home Phone *</label>
                    <input type="tel" name="homephone" id="homephone" placeholder="home phone" required>
                </div>
                <div class="single_input">
                    <label for="alternatephone">Alternate Phone</label>
                    <input type="tel" name="alternatephone" id="alternatephone"
                        placeholder="alternate phone">
                </div>
                <div class="single_input">
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="address" required>
                </div>
            </div>
            <div class="input_container">
                <div class="single_input">
                    <label for="city">City*</label>
                    <input type="text" name="city" id="city" placeholder="city" required>
                </div>
                <div class="single_input">
                    <label for="province">Province</label>
                    <input type="text" name="province" id="province" placeholder="province">
                </div>
                <div class="single_input">
                    <label for="postalcode">Postal code</label>
                    <input type="number" name="address" id="postalcode" placeholder="postal code"
                        required>
                </div>
            </div>
        </div>
        <div class="input_wrapper centered">
            <div class="input_container ">
                <div class="single_input ">
                    <div class="wrapper centered">
                        <div class="input_container">
                            <p>Were you previously employed within the City?</p>
                            <div class="single_input dontExpand">
                                <label for="yesq1"><b>Yes</b></label>
                                <input type="radio" name="decision" id="yesq1">
                                <label for="noq1"><b>No</b></label>
                                <input type="radio" name="decision" id="noq1">
                            </div>
                        </div>
                        <div class="input_container">
                            <div class="single_input">
                                <!-- <label for="payroll">what was/is your payroll number?</label> -->
                                <input type="number" name="payroll" id="payroll"
                                    placeholder="payroll number">
                                <input type="text" name="department" id="department"
                                    placeholder="department" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single_input">
                    <div class="wrapper centered">
                        <div class="input_container">
                            <p>Are you currently employed with the City?</p>
                            <div class="single_input dontExpand">
                                <label for="yesq2"><b>Yes</b></label>
                                <input type="radio" name="decision2" id="yesq2">
                                <label for="noq2"><b>No</b></label>
                                <input type="radio" name="decision2" id="noq2">
                            </div>
                        </div>

                        <div class="input_container">
                            <div class="single_input">
                                <!-- <label for="department">Which department did/are you working in?</label> -->
                                <input type="number" name="payroll" id="payroll"
                                    placeholder="payroll number">
                                <input type="text" name="department" id="department"
                                    placeholder="department" required>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- <div class="input_container">
                <div class="single_input">
                    <label for="payroll">what was/is your payroll number?</label>
                    <input type="number" name="payroll" id="payroll" placeholder="payroll number">
                    <input type="text" name="department" id="department" placeholder="department" required>
                </div>
                <div class="single_input">
                    <label for="department">Which department did/are you working in?</label>
                    <input type="number" name="payroll" id="payroll" placeholder="payroll number">
                    <input type="text" name="department" id="department" placeholder="department" required>
                </div>
            </div> -->
        </div>
    </fieldset>
</div>`,
]