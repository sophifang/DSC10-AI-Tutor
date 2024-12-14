<pre class='code'># Run this cell to set up packages for lecture.
    from lec12_imports import *</pre>
    <div class="section">
    <h3>Announcements</h3>
    <ul>
    <li>Quiz 2 is today in your assigned quiz session.
    <ul>
    <li>Check your email for your seating assignment.</li>
    <li>Bring your ID and a pencil.</li>
    <li>This is a 20 minute paper-based quiz with no aids allowed.</li>
    <li>The quiz covers Lecture 5 through 9 and related labs and homeworks.</li>
    <li>Quiz 2 is more challenging than Quiz 1, and next week&#x27;s Midterm Exam will be more challenging than Quiz 2. 📈</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Homework 3 is due on Tuesday.
    <ul>
    <li>Problems 1 and 2 only are relevant to Quiz 2.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Make sure to get started on the Midterm Project!</li></ul>
    </div>
    <div class="section">
    <h3>Agenda</h3>
    <ul>
    <li>Recap: iteration.</li></ul>
    <ul>
    <li>Simulations.
    <ul>
    <li>Example: What&#x27;s the probability of getting 60 or more heads if we flip 100 coins?</li>
    <li>Example: The &quot;Monty Hall&quot; Problem.</li>
    </ul>
    </li>
    </ul>
    </div>
    <div class="section">
    <h2>Recap: iteration</h2>
    </div>
    <div class="section">
    <h3>for-loops</h3>
    <ul>
    <li>for-loops are used to repeat the execution of code for every element of a sequence.</li></ul>
    <ul>
    <li>Lists, arrays, and strings are examples of sequences.</li></ul>
    <pre class='code'>for x in [&quot;my boyfriend&quot;, &quot;a god&quot;, &quot;the breeze in my hair on the weekend&quot;, &quot;a relaxing thought&quot;]:
        print(&quot;Karma is &quot; + x)</pre>
    <pre class='output'>Karma is my boyfriend
    Karma is a god
    Karma is the breeze in my hair on the weekend
    Karma is a relaxing thought</pre>
    <pre class='code'># Saving the lyrics in a variable.
    lyrics = &quot;&quot;
    for x in [&quot;my boyfriend&quot;, &quot;a god&quot;, &quot;the breeze in my hair on the weekend&quot;, &quot;a relaxing thought&quot;]:
        lyrics = lyrics + &quot;Karma is &quot; + x +&quot;\n&quot;</pre>
    <pre class='code'>lyrics</pre>
    <pre class='output'>&#x27;Karma is my boyfriend\nKarma is a god\nKarma is the breeze in my hair on the weekend\nKarma is a relaxing thought\n&#x27;</pre>
    <pre class='code'>print(lyrics)</pre>
    <pre class='output'>Karma is my boyfriend
    Karma is a god
    Karma is the breeze in my hair on the weekend
    Karma is a relaxing thought</pre>
    </div>
    <div class="section">
    <h3>The accumulator pattern</h3>
    <ul>
    <li>To store our results, we&#x27;ll typically use an int, array, or string.</li></ul>
    <ul>
    <li>If using an int, we define an int variable (usually set to 0) before the loop, then use + to add to it inside the loop.
    <ul>
    <li>Think of this like using a tally.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>If using an array, we create an array (usually empty) before the loop, then use np.append to add to it inside the loop.
    <ul>
    <li>Think of this like writing the results on a piece of paper.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>If using a string, we define a string variable (usually set to &quot;&quot;) before the loop, then use string concatenation + to add to it inside the loop.
    <ul>
    <li>Think of this like writing a word, one letter at a time.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>This pattern – of repeatedly adding to an int, array, or string – is called the accumulator pattern.</li></ul>
    </div>
    <div class="section">
    <h3>for-loops in DSC 10</h3>
    <ul>
    <li>Almost every for-loop in DSC 10 will use the accumulator pattern.</li></ul>
    <p>Almost every for-loop in DSC 10 will use the accumulator pattern.</p>
    <ul>
    <li>Do not use for-loops to perform mathematical operations on every element of an array or Series.
    <ul>
    <li></li>
    <li>Instead use DataFrame manipulations and built-in array or Series methods.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Helpful video 🎥: For Loops (and when not to use them) in DSC 10.</li></ul>
    <p>Helpful video 🎥: For Loops (and when not to use them) in DSC 10.</p>
    </div>
    <div class="section">
    <h3>Working with strings</h3>
    <p>String are sequences, so we can iterate over them, too!</p>
    <pre class='code'>for letter in &#x27;uc san diego&#x27;:
        print(letter.upper())</pre>
    <pre class='output'>U
    C
     
    S
    A
    N
     
    D
    I
    E
    G
    O</pre>
    <pre class='code'>&#x27;california&#x27;.count(&#x27;a&#x27;)</pre>
    <pre class='output'>2</pre>
    <pre class='code'>&gt;&gt;&gt; vowel_count(&#x27;king triton&#x27;)
    3
    
    &gt;&gt;&gt; vowel_count(&#x27;i go to uc san diego&#x27;)
    8</pre>
    </div>
    <div class="section">
    <h3>Example: Vowel count</h3>
    <p>Below, complete the implementation of the function vowel_count, which returns the number of vowels in the input string s (including repeats). Example behavior is shown below.</p>
    <pre class='code'>def vowel_count(s):
        # We need to keep track of the number of vowels seen so far. 
        # Before we start, we&#x27;ve seen zero vowels.
        
        # For each of the 5 vowels:
        
            # Count the number of occurrences of this vowel in s.
            
            # Add this count to the variable number.
            
            
        # Once we&#x27;ve gotten through all 5 vowels, return the answer.
        return ...</pre>
    <pre class='code'>vowel_count(&#x27;king triton&#x27;)</pre>
    <pre class='output'>Ellipsis</pre>
    <pre class='code'>vowel_count(&#x27;i go to uc san diego&#x27;)</pre>
    <pre class='output'>Ellipsis</pre>
    </div>
    <div class="section">
    <h2>Simulations</h2>
    </div>
    <div class="section">
    <h3>Simulations to estimate probabilities</h3>
    <ul>
    <li>What is the probability of getting 60 or more heads if we flip 100 coins?</li></ul>
    <ul>
    <li>While we could calculate it by hand (and will learn how to in future courses), we can also estimate it using the computer:
    <ul>
    <li>Figure out how to run the experiment (flipping 100 coins) once.</li>
    <li>Repeat the experiment many times.</li>
    <li>Find the proportion of experiments in which the number of heads was 60 or more.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>This is how we&#x27;ll use simulations – to estimate, or approximate, probabilities through computation.
    <ul>
    <li>The techniques we will introduce in today&#x27;s lecture will appear in almost every lecture for the remainder of the quarter!</li>
    </ul>
    </li>
    </ul>
    <img src="https://dsc-courses.github.io/dsc10-2024-sp/resources/lectures/lec12/data/simulation.png" alt="Image">
    </div>
    <div class="section">
    <h3>Making a random choice</h3>
    <ul>
    <li>To simulate, we need a way to perform a random experiment on the computer (e.g. flipping a coin, rolling a die).</li></ul>
    <ul>
    <li>A helpful function is np.random.choice(options).
    <ul>
    <li>The input, options, is a list or array to choose from.</li>
    <li>The output is a random element in options. By default, all elements are equally likely to be chosen.</li>
    </ul>
    </li>
    </ul>
    <pre class='code'># Simulate a fair coin flip.
    np.random.choice([&#x27;Heads&#x27;, &#x27;Tails&#x27;])</pre>
    <pre class='output'>&#x27;Heads&#x27;</pre>
    <pre class='code'># Simulate a roll of a die.
    np.random.choice(np.arange(1, 7))</pre>
    <pre class='output'>3</pre>
    </div>
    <div class="section">
    <h3>Making multiple random choices</h3>
    <p>np.random.choice(options, n) will return an array of n randomly selected elements from options.</p>
    <pre class='code'># Simulate 10 fair coin flips.
    np.random.choice([&#x27;Heads&#x27;, &#x27;Tails&#x27;], 10)</pre>
    <pre class='output'>array([&#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;], dtype=&#x27;&lt;U5&#x27;)</pre>
    </div>
    <div class="section">
    <h3>With replacement vs. without replacement</h3>
    <ul>
    <li>By default, np.random.choice selects with replacement.</li></ul>
    <ul>
    <li>That is, after making a selection, that option is still available.
    <ul>
    <li>e.g. if every time you draw a marble from a bag, you put it back.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>If an option can only be selected once, select without replacement by specifying replace=False.
    <ul>
    <li>e.g. if every time you draw a marble from a bag, you do not put it back.</li>
    </ul>
    </li>
    </ul>
    <pre class='code'># Choose three colleges to win free HDH swag.
    colleges = [&#x27;Revelle&#x27;, &#x27;John Muir&#x27;, &#x27;Thurgood Marshall&#x27;, 
                &#x27;Earl Warren&#x27;, &#x27;Eleanor Roosevelt&#x27;, &#x27;Sixth&#x27;, &#x27;Seventh&#x27;, &#x27;Eighth&#x27;]
    
    np.random.choice(colleges, 3, replace=False)</pre>
    <pre class='output'>array([&#x27;Earl Warren&#x27;, &#x27;Revelle&#x27;, &#x27;Seventh&#x27;], dtype=&#x27;&lt;U17&#x27;)</pre>
    </div>
    <div class="section">
    <h2>Example: What&#x27;s the probability of getting 60 or more heads if we flip 100 coins?</h2>
    </div>
    <div class="section">
    <h3>Flipping coins</h3>
    <p>What&#x27;s the probability of getting 60 or more heads if we flip 100 coins?</p>
    <p>Plan:</p>
    <ul>
    <li>Figure out how to run the experiment (flipping 100 coins) once.</li></ul>
    <ul>
    <li>Repeat the experiment many times.</li></ul>
    <ul>
    <li>Find the proportion of experiments in which the number of heads was 60 or more.</li></ul>
    </div>
    <div class="section">
    <h3>Step 1: Figure out how to run the experiment once</h3>
    <ul>
    <li>Use np.random.choice to flip 100 coins.</li></ul>
    <ul>
    <li>Use np.count_nonzero to count the number of heads.
    <ul>
    <li>np.count_nonzero(array) returns the number of entries in array that are True.</li>
    </ul>
    </li>
    </ul>
    <pre class='code'>coins = np.random.choice([&#x27;Heads&#x27;, &#x27;Tails&#x27;], 100)
    coins</pre>
    <pre class='output'>array([&#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;,
           &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;,
           &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;,
           &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;,
           &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;,
           &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;,
           &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;,
           &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;, &#x27;Heads&#x27;, &#x27;Tails&#x27;, &#x27;Heads&#x27;,
           &#x27;Tails&#x27;, &#x27;Heads&#x27;], dtype=&#x27;&lt;U5&#x27;)</pre>
    <pre class='code'>coins == &#x27;Heads&#x27;</pre>
    <pre class='output'>array([False,  True,  True,  True, False, False, False,  True, False,
            True,  True, False, False, False, False,  True,  True, False,
            True, False, False, False, False,  True, False,  True,  True,
            True,  True,  True, False,  True, False, False, False, False,
           False, False,  True,  True,  True, False,  True, False, False,
            True,  True, False,  True,  True,  True, False, False,  True,
           False, False,  True, False, False, False,  True, False, False,
            True, False, False, False,  True,  True,  True,  True,  True,
            True,  True, False, False, False,  True,  True, False, False,
            True, False,  True,  True, False, False,  True,  True, False,
            True,  True, False, False,  True,  True, False,  True, False,
            True])</pre>
    <pre class='code'>(coins == &#x27;Heads&#x27;).sum()</pre>
    <pre class='output'>49</pre>
    <pre class='code'>np.count_nonzero(coins == &#x27;Heads&#x27;) # Counts the number of Trues in the sequence.</pre>
    <pre class='output'>49</pre>
    <pre class='code'>np.count_nonzero([5, 6, 0, 2])</pre>
    <pre class='output'>3</pre>
    <ul>
    <li>Question: Why is it called count_nonzero?</li></ul>
    <ul>
    <li>Answer: In Python, True == 1 and False == 0, so counting the non-zero elements counts the number of Trues.</li></ul>
    </div>
    <div class="section">
    <h3>Aside: Defining a function to run the experiment</h3>
    <p>This makes it easy to run the experiment repeatedly.</p>
    <pre class='code'>def coin_experiment():
        coins = np.random.choice([&#x27;Heads&#x27;, &#x27;Tails&#x27;], 100)
        return np.count_nonzero(coins == &#x27;Heads&#x27;)</pre>
    <pre class='code'>coin_experiment()</pre>
    <pre class='output'>48</pre>
    </div>
    <div class="section">
    <h3>Step 2: Repeat the experiment many times</h3>
    <ul>
    <li>How do we run a piece of code many times? Using a for-loop!</li></ul>
    <ul>
    <li>Each time we run the experiment, we&#x27;ll need to store the results in an array.
    <ul>
    <li>To do this, we&#x27;ll use np.append!</li>
    </ul>
    </li>
    </ul>
    <pre class='code'>head_counts = np.array([])
    head_counts</pre>
    <pre class='output'>array([], dtype=float64)</pre>
    <pre class='code'>head_counts = np.append(head_counts, 15)
    head_counts</pre>
    <pre class='output'>array([15.])</pre>
    <pre class='code'>head_counts = np.append(head_counts, 25)
    head_counts</pre>
    <pre class='output'>array([15., 25.])</pre>
    </div>
    <div class="section">
    <h3>Step 2: Repeat the experiment many times</h3>
    <ul>
    <li>Imagine we start with a blank sheet of paper, and each time we run the experiment, we write the number of heads we see down on the sheet of paper.</li></ul>
    <ul>
    <li>The sheet will start off empty, but eventually will have one number for each time we ran the experiment.</li></ul>
    <pre class='code'># Specify the number of repetitions.
    repetitions = 10000
    
    # Create an empty array to store the results.
    head_counts = np.array([])
    
    for i in np.arange(repetitions):
        # For each repetition, run the experiment and add the result to head_counts.
        head_count = coin_experiment()
        head_counts = np.append(head_counts, head_count)</pre>
    <pre class='code'>len(head_counts)</pre>
    <pre class='output'>10000</pre>
    <pre class='code'>head_counts</pre>
    <pre class='output'>array([60., 52., 45., ..., 44., 53., 47.])</pre>
    </div>
    <div class="section">
    <h3>Step 3: Find the proportion of experiments in which the number of heads was 60 or more</h3>
    <pre class='code'># In how many experiments was the number of heads &gt;= 60?
    at_least_60 = np.count_nonzero(head_counts &gt;= 60)
    at_least_60</pre>
    <pre class='output'>270</pre>
    <pre class='code'># What is this as a proportion?
    at_least_60 / repetitions</pre>
    <pre class='output'>0.027</pre>
    <pre class='code'># Can also use np.mean()! Why?
    np.mean(head_counts &gt;= 60)</pre>
    <pre class='output'>0.027</pre>
    <p>This is quite close to the true theoretical answer!</p>
    <pre class='code'># The theoretical answer – don&#x27;t worry about how or why this code works.
    import math
    sum([math.comb(100, i) * (1 / 2) ** 100 for i in np.arange(60, 101)])</pre>
    <pre class='output'>0.028443966820490392</pre>
    </div>
    <div class="section">
    <h3>Visualizing the distribution</h3>
    <pre class='code'>head_counts</pre>
    <pre class='output'>array([60., 52., 45., ..., 44., 53., 47.])</pre>
    <pre class='code'>bpd.DataFrame().assign(
        Number_of_Heads=head_counts
    ).plot(kind=&#x27;hist&#x27;, bins=np.arange(30, 70), density=True, ec=&#x27;w&#x27;, figsize=(10, 5));
    plt.axvline(60, color=&#x27;C1&#x27;, linewidth=4);</pre>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmoAAAEvCAYAAAD1r+09AAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8rg+JYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAvQElEQVR4nO3df1iUdb7/8dfACIikDjMJB7UfkJzW7ZwSx/yZpkz0e6OT2Wadcxnr6QduWNaWmldup2DZzCxOlqeVyOpcXVZ76ttlrRpnT9kVncKAdLc2odRqBRGGSFGQYe7vHx1nHQGZmZjhlnk+rqvr4r7n85n7Pe9uhpf3PXPfFsMwDAEAAMB0Yga6AAAAAPSMoAYAAGBSBDUAAACTIqgBAACYFEENAADApAhqAAAAJkVQAwAAMCnrQBcQTvv27Qvr8zscDjU1NYV1G2ZHD+iBRA8keiBFdw+u+c+/+C3/v5vOHaBKBl407wfHhNKDtLS0HtdzRA0AAMCkCGoAAAAmRVADAAAwqUH9GTUAAMzKMAy1t7fL6/XKYrEMdDn9Zv/+/ero6BjoMgZUbz0wDEMxMTFKSEgI+P85QQ0AgAHQ3t6uIUOGyGodXH+KrVarYmNjB7qMAXWyHng8HrW3t2vo0KEBPRenPgEAGABer3fQhTT0zWq1yuv1BjyeoAYAwAAYTKc7EZxg/t8T1AAAAEyKoAYAgAkMO3JISfv29Nt/w44c6nObo0eP1kMPPeRbXrdunVavXt0vr+euu+7Spk2b+uW5AlFaWqpZs2bpl7/8ZY+Pb9y4UQ888IDfurlz5+rTTz/90dv+5ptvNGfOnB/9PD3h5DgAACZgaWlS68qCfnu+EQ+VSEOTTjomPj5ef/jDH3TnnXcqOTm537b9Y3V1dQX9hYQNGzbopZde0hlnnBGmqgYGR9QAAIhSsbGxuummm/Tss892e+zEI2Ljxo2TJFVUVOi6667TbbfdphkzZqioqEj/9V//pSuvvFLZ2dnas2ePb87777+va6+9VjNmzNA777wj6YcQ9vDDD+uKK66Qy+XSiy++6HveuXPnatGiRcrOzu615v/4j//QnDlzNGfOHP3ud7+TJN1///36+uuvdcstt/T4WgLx3nvv6eqrr9all16qW2+9VW1tbZKkNWvW6IorrtCcOXN03333yTAMSdKOHTvkcrl09dVX6/nnn/c9zxdffKFLL71Ul1xyiVwul7766quQ6jmGI2oAMECGHTkkS0tw9wM0bA619XGUBAjGggUL5HK5lJ+fH/Cczz77TO+++65GjhypadOm6cYbb9Rbb72l9evXa/369fr1r38tSfr222/1+9//Xnv27NH111+viy66SK+99ppOO+00vf322+ro6FBubq5mzZolSaqpqdEf//jHXo+K7dixQ6+88oo2bdokwzB01VVXaerUqfrtb3+rd999V6+++upJjwy++eab+vjjj33Lx0Kl2+3Wk08+qY0bNyoxMVFr167Vs88+q7vvvlsLFizQ3XffLUm688479c477ygnJ0dLlizRww8/rKlTp+rhhx/2PeeLL76of/3Xf1Vubq6OHj2qrq6ugPvaE4IaAAyQUE51BXI6CwjGaaedprlz56q0tDTga3udf/75SklJkSSdeeaZvqB17rnn6sMPP/SNu/rqqxUTE6P09HSdeeaZqqur03vvvafPP/9cb731liTp4MGD2r17t4YMGaILLrjgpKcuP/74Y1122WVKTEyUJF1++eX66KOPdN555wVU989+9jMVFhb6lufOnStJ+uSTT7Rr1y5dc801kqTOzk5NnDhR0g9H+p555hkdOXJE3333nf7+7/9eU6ZMUWtrq6ZOnSpJuu666/Q///M/kqSJEyeqpKREf/3rX3X55ZcrPT09oNp6Q1ADACDKLVy4UJdddpluuOEG37rjr/dlGIY6Ozt9j8XFxfl+jomJ8S3HxMTI4/H4HjvxMhTHlh955BFdfPHFfo9VVFT4Alhvjp127G+GYWjmzJl6+umn/da3t7dr+fLlevvttzV69GitXr1aHR0dMgyj10tsXHvttZo0aZK2bNmim266SatWrdKMGTNCri1in1GrqanR4sWLdeedd+qNN97o9rhhGHruued055136t577/U7p7tp0yYtWbJE99xzj5544gkdPXo0UmUDADDo2Ww2XX311Xr55Zd968aMGaOdO3dKkrZs2eIX1AK1adMmeb1e7dmzR3v37lVGRoZmzZqlF154wfd8X375pQ4fPhzQ802ZMkVbtmzRkSNHdPjwYW3evFmTJ08Ouq4TTZw4UZWVldq9e7ck6ciRI/ryyy99t4FKTk5WW1ub7yjgiBEjNHz4cN9p1Ndff933XHv37tWZZ56pX/ziF7rkkkv0+eef/6jaInJE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uYgmAQe1Bx980O9bnh0dHfrmm280d+7cgObX1NSorKxMXq9X2dnZys3N9XvcMAyVlZWpurpa8fHxys/PV3p6uu9xr9erpUuXKjk5WUuXLg20bAAAgFNWwEFtzpw5fssJCQk688wz9Xd/93d9zvV6vSotLdWKFStkt9u1bNkyOZ1OjRkzxjemurpaDQ0NKikpUW1trdavX++7p6gkvf322xo9erTft00BAAAGs4CD2sUXXxzyRurq6pSamuq7jMe0adNUWVnpF9S2b9+umTNnymKxKDMzU21tbWppaZHNZlNzc7Oqqqr0T//0T9q0aVPIdQAAAJxKQv7WZ29uuOGGbuvcbrfsdrtv2W63q7a2ttsYh8PhN8btdstms+n555/XzTffzNE0AAAQVQIOavX19froo490zjnnyOFwqKmpSXV1dZo8ebLi4uJOOtcwjG7rTryrQW9jPvnkE40YMULp6en685//fNLtlJeXq7y8XJJUXFzsF/zCwWq1hn0bZkcPBl8PjAMN8jbt73vg8TqPBr2dUO5sYuY5CmWKiV+PmXswZMgQ0//Omb2+cBps74mh6M8eBPWtz8WLF2vKlCm+5Y8++kgffvih8vPzTzrPbrerubnZt9zc3CybzdZtTFNTU7cx//u//6vt27erurpaR48e1ZEjR1RSUtLjBXhdLpdcLpdv+fjnC4djgTWa0YPB14Ok+m/VurL3C1z3xP7AqqC309M/zk7lOQpliolfj5l70NnZqRaT/84NpveEYA2298RQhNKDtLS0HtcHfFP26upqXXjhhX7rJk2apOrq6j7nZmRkqL6+Xo2NjfJ4PKqoqJDT6fQb43Q6tW3bNhmGoV27dikxMVE2m03z58/XunXrtHbtWt11110677zzTnqXBAAAgMEi4CNqqamp2rx5s6644grfui1btig1NbXPubGxscrLy1NhYaG8Xq9mz56tsWPHauvWrZKknJwcTZgwQVVVVSooKFBcXFyfR+kAAAAGu4CD2u23367HHntMb775ppKTk+V2uxUbG6t77rknoPlZWVnKysryW5eTk+P72WKxaOHChSd9jp/+9Kf66U9/GmjJAAAAp7SAg9rZZ5+tJ598UrW1tWppadHIkSOVmZkpq/VH3dwAAAAAvQj4M2onGj9+vDwej9rb2/uzHgAAAPyfgA+Hff311/rtb3+rIUOGqLm5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oxEjRqilpUWS1NLS4vc5jcHs+B6MHDlSMTExiomJUXZ2tr788suBLi9svvjiC23fvl2LFi3SE088oT/96U8qKSmJqv2gtx5E035wTHJysiRpxIgRmjRpkurq6qJqX5B67kE07Qt2u112u13jxo2TJE2ZMkW7d++Oqv2gtx5E035wTHV1tc4++2yNHDlSkvptPyCoBeD7779XW1ubpB++/bhz506NHj1aTqdT7733niTpvffe06RJkwayzLDqrQfHdkJJ+vjjjwf1XSPmz5+vdevWae3atbrrrrt03nnnqaCgIKr2g956EE37gSS1t7f7Tv22t7drx44dOuOMM6JqX+itB9G0L4wcOVJ2u1379u2T9MPnk8aMGRNV+0FvPYim/eCY4097Suq3/YBTnwFoaWnR2rVr5fV6ZRiGpk6dqokTJyozM1Nr1qzRH//4RzkcDi1ZsmSgSw2b3nrw7//+79qzZ48sFotOP/103XrrrQNdasTl5uZGzX7Qm5deeimq9oPW1lY99thjkn449TNjxgxdcMEFysjIiJp9obceRNt7Ql5enkpKSuTxeDRq1Cjl5+fLMIyo2Q+knntQVlYWVftBR0eHduzY4fc6++tvA5fnAAAAMClOfQIAAJgUQQ0AAMCkCGoAAAAmRVADAAAwKYIaAACASRHUAAAATIqgBgAAYFIENQAAAJP6/zN6oHFTo44lAAAAAElFTkSuQmCC
    " alt="Image">
    <ul>
    <li>This histogram describes the distribution of the number of heads in each experiment.</li></ul>
    <ul>
    <li>Now we see another reason to use density histograms.
    <ul>
    <li>Using density means that areas are probabilities.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Next class, we&#x27;ll learn more about why it&#x27;s valid to estimate probabilities using simulations.</li></ul>
    </div>
    <div class="section">
    <h2>Example: The &quot;Monty Hall&quot; Problem</h2>
    </div>
    <div class="section">
    <h3>The &quot;Monty Hall&quot; Problem</h3>
    <p>Suppose you’re on a game show, and you’re given the choice of three doors. A car 🚗 is behind one of the doors, and goats 🐐🐐 are behind the other two.</p>
    <ul>
    <li>You pick a door, say Door #2, and the host, who knows what’s behind the doors, opens another door, say Door #3, which has a goat.</li></ul>
    <p>You pick a door, say Door #2, and the host, who knows what’s behind the doors, opens another door, say Door #3, which has a goat.</p>
    <ul>
    <li>The host then says to you, “Do you want to switch to Door #1 or stay with Door #2?”</li></ul>
    <p>The host then says to you, “Do you want to switch to Door #1 or stay with Door #2?”</p>
    <ul>
    <li>Question: Should you stay or switch?</li></ul>
    <p>Question: Should you stay or switch?</p>
    <p>(The question was posed in Parade magazine’s &quot;Ask Marilyn&quot; column in 1990. It is called the &quot;Monty Hall problem&quot; because Monty Hall hosted a similar game show called &quot;Let&#x27;s Make a Deal.&quot;)</p>
    </div>
    <div class="section">
    <h3>Let&#x27;s play!</h3>
    <p>Below, we&#x27;ve embedded the Monty Hall simulator from this site.</p>
    <pre class='code'>from IPython.display import IFrame
    IFrame(&#x27;https://montyhall.io/&#x27;, width=600, height=400)</pre>
    </div>
    <div class="section">
    <h3>Concept Check ✅ – Answer at cc.dsc10.com</h3>
    <p>Suppose you originally selected Door #2. The host reveals Door #3 to have a goat behind it. What should you do?</p>
    <p>A. Stay with Door #2; it has just as high a chance of winning as Door #1. It doesn&#x27;t matter whether you switch or not.</p>
    <p>B. Switch to Door #1; it has a higher chance of winning than Door #2.</p>
    </div>
    <div class="section">
    <h3>Time to simulate!</h3>
    <ul>
    <li>Let&#x27;s estimate the probability of winning if you switch.</li></ul>
    <ul>
    <li>If it&#x27;s higher than 50%, then switching is the better strategy, otherwise staying is the better strategy.</li></ul>
    <p>Plan:</p>
    <ul>
    <li>Figure out how to simulate a single game.</li></ul>
    <ul>
    <li>Play the game many times, switching each time.</li></ul>
    <ul>
    <li>Compute the proportion of wins.</li></ul>
    </div>
    <div class="section">
    <h3>Step 1: Simulate a single game</h3>
    <p>When you pick a door, there are three equally-likely outcomes for what is behind the door you picked:</p>
    <ul>
    <li>Car.</li></ul>
    <ul>
    <li>Goat #1.</li></ul>
    <ul>
    <li>Goat #2.</li></ul>
    <pre class='code'>options = np.array([&#x27;Car&#x27;, &#x27;Goat #1&#x27;, &#x27;Goat #2&#x27;])
    behind_picked_door = np.random.choice(options)
    behind_picked_door</pre>
    <pre class='output'>&#x27;Goat #1&#x27;</pre>
    </div>
    <div class="section">
    <h3>Step 1: Simulate a single game</h3>
    <p>When the host opens a different door, they always reveal a goat.</p>
    <pre class='code'>if behind_picked_door == &#x27;Goat #1&#x27;:
        revealed = &#x27;Goat #2&#x27;
    elif behind_picked_door == &#x27;Goat #2&#x27;:
        revealed = &#x27;Goat #1&#x27;
    else:
        # This is the case in which you originally picked a car!
        revealed = np.random.choice([&#x27;Goat #1&#x27;, &#x27;Goat #2&#x27;])
    
    revealed</pre>
    <pre class='output'>&#x27;Goat #2&#x27;</pre>
    <p>If you always switch, you&#x27;ll end up winning the prize that is neither behind_picked_door nor revealed.</p>
    <pre class='code'>options</pre>
    <pre class='output'>array([&#x27;Car&#x27;, &#x27;Goat #1&#x27;, &#x27;Goat #2&#x27;], dtype=&#x27;&lt;U7&#x27;)</pre>
    <pre class='code'>behind_picked_door</pre>
    <pre class='output'>&#x27;Goat #1&#x27;</pre>
    <pre class='code'>revealed</pre>
    <pre class='output'>&#x27;Goat #2&#x27;</pre>
    <pre class='code'>your_prize = options[(options != behind_picked_door) &amp; (options != revealed)][0]
    your_prize</pre>
    <pre class='output'>&#x27;Car&#x27;</pre>
    </div>
    <div class="section">
    <h3>Step 1: Simulate a single game</h3>
    <p>Let&#x27;s put all of our work into a single function to make it easier to repeat.</p>
    <pre class='code'>def simulate_switch_strategy():
        options = np.array([&#x27;Car&#x27;, &#x27;Goat #1&#x27;, &#x27;Goat #2&#x27;])
        behind_picked_door = np.random.choice(options)
        
        if behind_picked_door == &#x27;Goat #1&#x27;:
            revealed = &#x27;Goat #2&#x27;
        elif behind_picked_door == &#x27;Goat #2&#x27;:
            revealed = &#x27;Goat #1&#x27;
        else:
            revealed = np.random.choice([&#x27;Goat #1&#x27;, &#x27;Goat #2&#x27;])
            
        your_prize = options[(options != behind_picked_door) &amp; (options != revealed)][0]
            
        #print(behind_picked_door, &#x27;was behind the door.&#x27;, revealed, &#x27;was revealed by the host. Your prize was:&#x27;, your_prize)
        return your_prize</pre>
    <p>Now, every time we call simulate_switch_strategy, the result is your prize.</p>
    <pre class='code'>simulate_switch_strategy()</pre>
    <pre class='output'>&#x27;Car&#x27;</pre>
    </div>
    <div class="section">
    <h3>Step 2: Play the game many times</h3>
    <p>We should save your prize in each game; to do so, we&#x27;ll use np.append.</p>
    <pre class='code'>repetitions = 10000
    
    your_prizes = np.array([])
    
    for i in np.arange(repetitions):
        your_prize = simulate_switch_strategy()
        your_prizes = np.append(your_prizes, your_prize)</pre>
    <pre class='code'>your_prizes</pre>
    <pre class='output'>array([&#x27;Car&#x27;, &#x27;Goat #2&#x27;, &#x27;Car&#x27;, ..., &#x27;Car&#x27;, &#x27;Car&#x27;, &#x27;Car&#x27;], dtype=&#x27;&lt;U32&#x27;)</pre>
    </div>
    <div class="section">
    <h3>Step 3: Count the proportion of wins for this strategy (switching)</h3>
    <pre class='code'>your_prizes</pre>
    <pre class='output'>array([&#x27;Car&#x27;, &#x27;Goat #2&#x27;, &#x27;Car&#x27;, ..., &#x27;Car&#x27;, &#x27;Car&#x27;, &#x27;Car&#x27;], dtype=&#x27;&lt;U32&#x27;)</pre>
    <pre class='code'>np.count_nonzero(your_prizes == &#x27;Car&#x27;)</pre>
    <pre class='output'>6604</pre>
    <pre class='code'>np.count_nonzero(your_prizes == &#x27;Car&#x27;) / repetitions</pre>
    <pre class='output'>0.6604</pre>
    <p>This is quite close to the true probability of winning if you switch, $\frac{2}{3}$.</p>
    </div>
    <div class="section">
    <h3>Alternate implementation</h3>
    <ul>
    <li>Looking back at our implementation, we kept track of your prize in each game.</li></ul>
    <ul>
    <li>However, all we really needed to keep track of was the number of games in which you won a car.</li></ul>
    <ul>
    <li>💡 Idea: Keep a tally of the number of times you won a car. That is, initialize car_count to 0, and add 1 to it each time your prize is a car.</li></ul>
    <pre class='code'>car_count = 0</pre>
    <pre class='code'>for i in np.arange(repetitions):
        your_prize = simulate_switch_strategy()
        if your_prize == &#x27;Car&#x27;:
            car_count = car_count + 1</pre>
    <pre class='code'>car_count / repetitions</pre>
    <pre class='output'>0.667</pre>
    <p>No arrays needed! This strategy won&#x27;t always work; it depends on the goal of the simulation.</p>
    </div>
    <div class="section">
    <h3>What if you always stay with your original door?</h3>
    <p>In this case, your prize is always the same as what was behind the picked door.</p>
    <pre class='code'>car_count = 0
    
    for i in np.arange(repetitions):
        options = np.array([&#x27;Car&#x27;, &#x27;Goat #1&#x27;, &#x27;Goat #2&#x27;])
        behind_picked_door = np.random.choice(options)
        your_prize = behind_picked_door
        if your_prize == &#x27;Car&#x27;:
            car_count = car_count + 1
            
    car_count / repetitions</pre>
    <pre class='output'>0.334</pre>
    <ul>
    <li>This is quite close to the true probability of winning if you stay, $\frac{1}{3}$.</li></ul>
    <ul>
    <li>Conclusion: It&#x27;s better to switch.</li></ul>
    <ul>
    <li>Why?
    <ul>
    <li>If you originally choose a goat, Monty will reveal the other goat, and you&#x27;ll win the car by switching.</li>
    <li>If you originally choose a car, you&#x27;ll win by staying.</li>
    <li>But there are 2 goats and only 1 car, so you win twice as often by switching.</li>
    </ul>
    </li>
    </ul>
    </div>
    <div class="section">
    <h3>Marilyn vos Savant&#x27;s column in Parade magazine</h3>
    <ul>
    <li>When asked this question by a reader, vos Savant stated the correct answer: switch.</li></ul>
    <ul>
    <li>She received over 10,000 letters in disagreement, including over 1,000 letters from people with Ph.D.s.</li></ul>
    <ul>
    <li>This became a nationwide controversy, even getting a front-page New York Times article in 1991.</li></ul>
    <img src="https://dsc-courses.github.io/dsc10-2024-sp/resources/lectures/lec12/data/vos_savant.jpg" alt="Image">
    </div>
    <div class="section">
    <h2>Summary</h2>
    </div>
    <div class="section">
    <h3>Simulations find probabilities</h3>
    <ul>
    <li>Calculating probabilities is important, but can be hard!
    <ul>
    <li>You&#x27;ll learn plenty of formulas in future DSC classes, if you end up taking them.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Simulations let us find probabilities through code rather than through math.</li></ul>
    <ul>
    <li>Many real-world scenarios are complicated.
    <ul>
    <li>Simulations are much easier than math in many of these cases.</li>
    </ul>
    </li>
    </ul>
    </div>
    <div class="section">
    <h3>The simulation &quot;recipe&quot;</h3>
    <p>To estimate the probability of an event through simulation:</p>
    <ul>
    <li>Make a function that runs the experiment once.</li></ul>
    <ul>
    <li>Run that function many times (usually 10,000) with a for-loop, and save the results in an array with np.append.</li></ul>
    <ul>
    <li>Compute the proportion of times the event occurs using np.count_nonzero.</li></ul>
    </div>