<pre class='code'># Run this cell to set up packages for lecture.
    from lec08_imports import *</pre>
    <div class="section">
    <h3>Announcements</h3>
    <ul>
    <li>Lab 2 is due tomorrow at 11:59PM.</li></ul>
    <ul>
    <li>Homework 2 is due Tuesday at 11:59PM.</li></ul>
    <ul>
    <li>Come to office hours to work on assignments - there is a lot of support available!</li></ul>
    </div>
    <div class="section">
    <h3>Agenda</h3>
    <ul>
    <li>Functions.</li></ul>
    <ul>
    <li>Applying functions to DataFrames.
    <ul>
    <li>Example: Student names.</li>
    </ul>
    </li>
    </ul>
    <p>Reminder: Use the DSC 10 Reference Sheet.</p>
    </div>
    <div class="section">
    <h2>Functions</h2>
    </div>
    <div class="section">
    <h3>Defining functions</h3>
    <ul>
    <li>We&#x27;ve learned how to do quite a bit in Python:
    <ul>
    <li>Manipulate arrays, Series, and DataFrames.</li>
    <li>Perform operations on strings.</li>
    <li>Create visualizations.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>But so far, we&#x27;ve been restricted to using existing functions (e.g. max, np.sqrt, len) and methods (e.g. .groupby, .assign, .plot).</li></ul>
    </div>
    <div class="section">
    <h3>Motivation</h3>
    <p>Suppose you drive to a restaurant 🥘 in LA, located exactly 100 miles away.</p>
    <ul>
    <li>For the first 50 miles, you drive at 80 miles per hour.</li></ul>
    <ul>
    <li>For the last 50 miles, you drive at 60 miles per hour.</li></ul>
    <ul>
    <li>Question: What is your average speed throughout the journey?</li></ul>
    <ul>
    
    </div>
    <div class="section">
    <h3>Example: Harmonic mean</h3>
    <p>It is often used to find the average of multiple rates.</p>
    <p>Finding the harmonic mean of 80 and 60 is not hard:</p>
    <pre class='code'>2 / (1 / 80 + 1 / 60)</pre>
    <pre class='output'>68.57142857142857</pre>
    <p>But what if we want to find the harmonic mean of 80 and 70? 80 and 90? 20 and 40? This would require a lot of copy-pasting, which is prone to error.</p>
    <p>It turns out that we can define our own &quot;harmonic mean&quot; function just once, and re-use it multiple times.</p>
    <pre class='code'>def harmonic_mean(a, b):
        return 2 / (1 / a + 1 / b)</pre>
    <pre class='code'>harmonic_mean(80, 60)</pre>
    <pre class='output'>68.57142857142857</pre>
    <pre class='code'>harmonic_mean(20, 40)</pre>
    <pre class='output'>26.666666666666664</pre>
    <p>Note that we only had to specify how to calculate the harmonic mean once!</p>
    </div>
    <div class="section">
    <h3>Functions</h3>
    <p>Functions are a way to divide our code into small subparts to prevent us from writing repetitive code. Each time we define our own function in Python, we will use the following pattern.</p>
    <pre class='code'>show_def()</pre>
    </div>
    <div class="section">
    <h3>Functions are &quot;recipes&quot;</h3>
    <ul>
    <li>Functions take in inputs, known as arguments, do something, and produce some outputs.</li></ul>
    <ul>
    <li>The beauty of functions is that you don&#x27;t need to know how they are implemented in order to use them!
    <ul>
    <li>For instance, you&#x27;ve been using the function bpd.read_csv without knowing how it works.</li>
    <li>This is the premise of the idea of abstraction in computer science – you&#x27;ll hear a lot about this if you take DSC 20.</li>
    </ul>
    </li>
    </ul>
    <pre class='code'>harmonic_mean(20, 40)</pre>
    <pre class='output'>26.666666666666664</pre>
    <pre class='code'>harmonic_mean(79, 894)</pre>
    <pre class='output'>145.17163412127442</pre>
    <pre class='code'>harmonic_mean(-2, 4)</pre>
    <pre class='output'>-8.0</pre>
    </div>
    <div class="section">
    <h3>Parameters and arguments</h3>
    <p>triple has one parameter, x.</p>
    <pre class='code'>def triple(x):
        return x * 3</pre>
    <p>When we call triple with the argument 5, within the body of triple, x means 5.</p>
    <pre class='code'>triple(5)</pre>
    <pre class='output'>15</pre>
    <p>We can change the argument we call triple with – we can even call it with strings!</p>
    <pre class='code'>triple(7 + 8)</pre>
    <pre class='output'>45</pre>
    <pre class='code'>triple(&#x27;triton&#x27;)</pre>
    <pre class='output'>&#x27;tritontritontriton&#x27;</pre>
    </div>
    <div class="section">
    <h3>Scope 🩺</h3>
    <p>The names you choose for a function’s parameters are only known to that function (known as local scope). The rest of your notebook is unaffected by parameter names.</p>
    <pre class='code'>def triple(x):
        return x * 3</pre>
    <pre class='code'>triple(7)</pre>
    <pre class='output'>21</pre>
    <p>Since we haven&#x27;t defined an x outside of the body of triple, our notebook doesn&#x27;t know what x means.</p>
    <pre class='code'>x</pre>
    <pre class='output'>---------------------------------------------------------------------------
    NameError                                 Traceback (most recent call last)
    Cell In[16], line 1
    ----&gt; 1 x
    
    NameError: name &#x27;x&#x27; is not defined</pre>
    <p>We can define an x outside of the body of triple, but that doesn&#x27;t change how triple works.</p>
    <pre class='code'>x = 15</pre>
    <pre class='code'># When triple(12) is called, you can pretend
    # there&#x27;s an invisible line inside the body of x
    # that says x = 12.
    # The x = 15 above is ignored.
    triple(12)</pre>
    <pre class='output'>36</pre>
    </div>
    <div class="section">
    <h3>Functions can take 0 or more arguments</h3>
    <p>Functions can take any number of arguments. So far, we&#x27;ve created a function with two arguments, harmonic_mean, and a function with one argument, triple.</p>
    <p>greeting takes no arguments!</p>
    <pre class='code'>def greeting():
        return &#x27;Hi! 👋&#x27;</pre>
    <pre class='code'>greeting()</pre>
    <pre class='output'>&#x27;Hi! 👋&#x27;</pre>
    </div>
    <div class="section">
    <h3>Functions don&#x27;t run until you call them!</h3>
    <p>The body of a function is not run until you use (call) the function.</p>
    <p>Here, we can define where_is_the_error without seeing an error message.</p>
    <pre class='code'>def where_is_the_error(something):
        &#x27;&#x27;&#x27;You can describe your function within triple quotes. For example, this function 
        illustrates that errors don&#x27;t occur until functions are executed (called).&#x27;&#x27;&#x27;
        return (1 / 0) + something</pre>
    <p>It is only when we call where_is_the_error that Python gives us an error message.</p>
    <pre class='code'>where_is_the_error(5)</pre>
    <pre class='output'>---------------------------------------------------------------------------
    ZeroDivisionError                         Traceback (most recent call last)
    Cell In[22], line 1
    ----&gt; 1 where_is_the_error(5)
    
    Cell In[21], line 4, in where_is_the_error(something)
          1 def where_is_the_error(something):
          2     &#x27;&#x27;&#x27;You can describe your function within triple quotes. For example, this function 
          3     illustrates that errors don&#x27;t occur until functions are executed (called).&#x27;&#x27;&#x27;
    ----&gt; 4     return (1 / 0) + something
    
    ZeroDivisionError: division by zero</pre>
    <pre class='code'>&gt;&gt;&gt; first_name(&#x27;Pradeep Khosla&#x27;)
    &#x27;Pradeep&#x27;</pre>
    </div>
    <div class="section">
    <h3>Example: first_name</h3>
    <p>Let&#x27;s create a function called first_name that takes in someone&#x27;s full name and returns their first name. Example behavior is shown below.</p>
    <p>Hint: Use the string method .split.</p>
    <p>General strategy for writing functions:</p>
    <ul>
    <li>First, try and get the behavior to work on a single example.</li></ul>
    <ul>
    <li>Then, encapsulate that behavior inside a function.</li></ul>
    <pre class='code'>&#x27;Pradeep Khosla&#x27;.split(&#x27; &#x27;)[0]</pre>
    <pre class='output'>&#x27;Pradeep&#x27;</pre>
    <pre class='code'>def first_name(full_name):
        &#x27;&#x27;&#x27;Returns the first name given a full name.&#x27;&#x27;&#x27;
        return full_name.split(&#x27; &#x27;)[0]</pre>
    <pre class='code'>first_name(&#x27;Pradeep Khosla&#x27;)</pre>
    <pre class='output'>&#x27;Pradeep&#x27;</pre>
    <pre class='code'># What if there are three names?
    first_name(&#x27;Chancellor Pradeep Khosla&#x27;)</pre>
    <pre class='output'>&#x27;Chancellor&#x27;</pre>
    </div>
    <div class="section">
    <h3>Returning</h3>
    <ul>
    <li>The return keyword specifies what the output of your function should be, i.e. what a call to your function will evaluate to.</li></ul>
    <ul>
    <li>Most functions we write will use return, but using return is not strictly required.
    <ul>
    <li>If you want to be able to save the output of your function to a variable, you must use return!</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Be careful: print and return work differently!</li></ul>
    <pre class='code'>def pythagorean(a, b):
        &#x27;&#x27;&#x27;Computes the hypotenuse length of a triangle with legs a and b.&#x27;&#x27;&#x27;
        c = (a ** 2 + b ** 2) ** 0.5
        print(c)</pre>
    <pre class='code'>x = pythagorean(3, 4)</pre>
    <pre class='output'>5.0</pre>
    <pre class='code'># No output – why?
    x</pre>
    <pre class='code'># Errors – why?
    x + 10</pre>
    <pre class='output'>---------------------------------------------------------------------------
    TypeError                                 Traceback (most recent call last)
    Cell In[30], line 2
          1 # Errors – why?
    ----&gt; 2 x + 10
    
    TypeError: unsupported operand type(s) for +: &#x27;NoneType&#x27; and &#x27;int&#x27;</pre>
    <pre class='code'>def better_pythagorean(a, b):
        &#x27;&#x27;&#x27;Computes the hypotenuse length of a triangle with legs a and b, 
           and actually returns the result.
        &#x27;&#x27;&#x27;
        c = (a ** 2 + b ** 2) ** 0.5
        return c</pre>
    <pre class='code'>x = better_pythagorean(3, 4)
    x</pre>
    <pre class='output'>5.0</pre>
    <pre class='code'>x + 10</pre>
    <pre class='output'>15.0</pre>
    </div>
    <div class="section">
    <h3>Returning</h3>
    <p>Once a function executes a return statement, it stops running.</p>
    <pre class='code'>def motivational(quote):
        return 0
        print(&quot;Here&#x27;s a motivational quote:&quot;, quote)</pre>
    <pre class='code'>motivational(&#x27;Fall seven times and stand up eight.&#x27;)</pre>
    <pre class='output'>0</pre>
    </div>
    <div class="section">
    <h2>Applying functions to DataFrames</h2>
    </div>
    <div class="section">
    <h3>DSC 10 student data</h3>
    <p>The DataFrame roster contains the names and lecture sections of all students enrolled in DSC 10 this quarter. The first names are real, while the last names have been anonymized for privacy.</p>
    <pre class='code'>roster = bpd.read_csv(&#x27;data/roster-anon.csv&#x27;)
    roster</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    </tr>
    <tr>
    <td>0</td>
    <td>Allie Sazhma</td>
    <td>11AM</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Amina Igxazd</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Jazmine Enesxr</td>
    <td>9AM</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>219</td>
    <td>Ismayl Gwuiij</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>220</td>
    <td>Neil Dkaqgm</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>221</td>
    <td>Maggie Ldfgau</td>
    <td>9AM</td>
    </tr>
    </table>
    <p>222 rows × 2 columns</p>
    </div>
    <div class="section">
    <h3>Example: Common first names</h3>
    <p>What is the most common first name among DSC 10 students? (Any guesses?)</p>
    <pre class='code'>roster</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    </tr>
    <tr>
    <td>0</td>
    <td>Allie Sazhma</td>
    <td>11AM</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Amina Igxazd</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Jazmine Enesxr</td>
    <td>9AM</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>219</td>
    <td>Ismayl Gwuiij</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>220</td>
    <td>Neil Dkaqgm</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>221</td>
    <td>Maggie Ldfgau</td>
    <td>9AM</td>
    </tr>
    </table>
    <p>222 rows × 2 columns</p>
    <ul>
    <li>Problem: We can&#x27;t answer that right now, since we don&#x27;t have a column with first names. If we did, we could group by it.</li></ul>
    <ul>
    <li>Solution: Use our function that extracts first names on every element of the &#x27;name&#x27; column.</li></ul>
    </div>
    <div class="section">
    <h3>Using our first_name function</h3>
    <p>Somehow, we need to call first_name on every student&#x27;s &#x27;name&#x27;.</p>
    <pre class='code'>roster</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    </tr>
    <tr>
    <td>0</td>
    <td>Allie Sazhma</td>
    <td>11AM</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Amina Igxazd</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Jazmine Enesxr</td>
    <td>9AM</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>219</td>
    <td>Ismayl Gwuiij</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>220</td>
    <td>Neil Dkaqgm</td>
    <td>10AM</td>
    </tr>
    <tr>
    <td>221</td>
    <td>Maggie Ldfgau</td>
    <td>9AM</td>
    </tr>
    </table>
    <p>222 rows × 2 columns</p>
    <pre class='code'>roster.get(&#x27;name&#x27;).iloc[0]</pre>
    <pre class='output'>&#x27;Allie Sazhma&#x27;</pre>
    <pre class='code'>first_name(roster.get(&#x27;name&#x27;).iloc[0])</pre>
    <pre class='output'>&#x27;Allie&#x27;</pre>
    <pre class='code'>first_name(roster.get(&#x27;name&#x27;).iloc[1])</pre>
    <pre class='output'>&#x27;Amina&#x27;</pre>
    <p>Ideally, there&#x27;s a better solution than doing this hundreds of times...</p>
    </div>
    <div class="section">
    <h3>.apply</h3>
    <ul>
    <li>To apply the function func_name to every element of column &#x27;col&#x27; in DataFrame df, use</li></ul>
    <ul>
    <li>The .apply method is a Series method.
    <ul>
    <li>Important: We use .apply on Series, not DataFrames.</li>
    <li>The output of .apply is also a Series.</li>
    </ul>
    </li>
    </ul>
    <ul>
    <li>Pass just the name of the function – don&#x27;t call it!
    <ul>
    <li>Good ✅: .apply(first_name).</li>
    <li>Bad ❌: .apply(first_name()).</li>
    </ul>
    </li>
    </ul>
    <pre class='code'>roster.get(&#x27;name&#x27;)</pre>
    <pre class='output'>0        Allie Sazhma
    1        Amina Igxazd
    2      Jazmine Enesxr
                ...      
    219     Ismayl Gwuiij
    220       Neil Dkaqgm
    221     Maggie Ldfgau
    Name: name, Length: 222, dtype: object</pre>
    <pre class='code'>roster.get(&#x27;name&#x27;).apply(first_name)</pre>
    <pre class='output'>0        Allie
    1        Amina
    2      Jazmine
            ...   
    219     Ismayl
    220       Neil
    221     Maggie
    Name: name, Length: 222, dtype: object</pre>
    </div>
    <div class="section">
    <h3>Example: Common first names</h3>
    <pre class='code'>roster = roster.assign(
        first=roster.get(&#x27;name&#x27;).apply(first_name)
    )
    roster</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    <th>first</th>
    </tr>
    <tr>
    <td>0</td>
    <td>Allie Sazhma</td>
    <td>11AM</td>
    <td>Allie</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Amina Igxazd</td>
    <td>10AM</td>
    <td>Amina</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Jazmine Enesxr</td>
    <td>9AM</td>
    <td>Jazmine</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>219</td>
    <td>Ismayl Gwuiij</td>
    <td>10AM</td>
    <td>Ismayl</td>
    </tr>
    <tr>
    <td>220</td>
    <td>Neil Dkaqgm</td>
    <td>10AM</td>
    <td>Neil</td>
    </tr>
    <tr>
    <td>221</td>
    <td>Maggie Ldfgau</td>
    <td>9AM</td>
    <td>Maggie</td>
    </tr>
    </table>
    <p>222 rows × 3 columns</p>
    <p>Now that we have a column containing first names, we can find the distribution of first names.</p>
    <pre class='code'>name_counts = (
        roster
        .groupby(&#x27;first&#x27;)
        .count()
        .sort_values(&#x27;name&#x27;, ascending=False)
        .get([&#x27;name&#x27;])
    )
    name_counts</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    </tr>
    <tr>
    <td>first</td>
    <td></td>
    </tr>
    <tr>
    <td>Kevin</td>
    <td>4</td>
    </tr>
    <tr>
    <td>Ryan</td>
    <td>4</td>
    </tr>
    <tr>
    <td>Noah</td>
    <td>3</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>Hongyu</td>
    <td>1</td>
    </tr>
    <tr>
    <td>Hriday</td>
    <td>1</td>
    </tr>
    <tr>
    <td>Zixuan</td>
    <td>1</td>
    </tr>
    </table>
    <p>200 rows × 1 columns</p>
    <pre class='code'>shared_names = name_counts[name_counts.get(&#x27;name&#x27;) &gt;= 2]
    
    # Bar chart.
    shared_names.sort_values(&#x27;name&#x27;).plot(kind=&#x27;barh&#x27;, y=&#x27;name&#x27;);
    
    # Proportion = # students with a shared name / total # of students.
    shared_names.get(&#x27;name&#x27;).sum() / roster.shape[0]</pre>
    </div>
    <div class="section">
    <h3>Activity</h3>
    <p>Below:</p>
    <ul>
    <li>Create a bar chart showing the number of students with each first name, but only include first names shared by at least two students.</li></ul>
    <ul>
    <li>Determine the proportion of students in DSC 10 who have a first name that is shared by at least two students.</li></ul>
    <p>Hint: Start by defining a DataFrame with only the names in name_counts that appeared at least twice. You can use this DataFrame to answer both questions.</p>
    <pre class='code'>...</pre>
    <pre class='output'>Ellipsis</pre>
    <pre class='code'>...</pre>
    <pre class='output'>Ellipsis</pre>
    </div>
    <div class="section">
    <h3>.apply works with built-in functions, too!</h3>
    <pre class='code'>name_counts.get(&#x27;name&#x27;)</pre>
    <pre class='output'>first
    Kevin     4
    Ryan      4
    Noah      3
             ..
    Hongyu    1
    Hriday    1
    Zixuan    1
    Name: name, Length: 200, dtype: int64</pre>
    <pre class='code'># Not necessarily meaningful, but doable.
    name_counts.get(&#x27;name&#x27;).apply(np.log)</pre>
    <pre class='output'>first
    Kevin     1.39
    Ryan      1.39
    Noah      1.10
              ... 
    Hongyu    0.00
    Hriday    0.00
    Zixuan    0.00
    Name: name, Length: 200, dtype: float64</pre>
    </div>
    <div class="section">
    <h3>Aside: Resetting the index</h3>
    <p>In name_counts, first names are stored in the index, which is not a Series. This means we can&#x27;t use .apply on it.</p>
    <pre class='code'>name_counts.index</pre>
    <pre class='output'>Index([&#x27;Kevin&#x27;, &#x27;Ryan&#x27;, &#x27;Noah&#x27;, &#x27;Kristen&#x27;, &#x27;Jimmy&#x27;, &#x27;Felix&#x27;, &#x27;Edward&#x27;, &#x27;David&#x27;,
           &#x27;Olivia&#x27;, &#x27;Brandon&#x27;,
           ...
           &#x27;Hailey&#x27;, &#x27;Hannah&#x27;, &#x27;Haotian&#x27;, &#x27;Harrison&#x27;, &#x27;Helen&#x27;, &#x27;Henry&#x27;, &#x27;Hongan&#x27;,
           &#x27;Hongyu&#x27;, &#x27;Hriday&#x27;, &#x27;Zixuan&#x27;],
          dtype=&#x27;object&#x27;, name=&#x27;first&#x27;, length=200)</pre>
    <pre class='code'>name_counts.index.apply(max)</pre>
    <pre class='output'>---------------------------------------------------------------------------
    AttributeError                            Traceback (most recent call last)
    Cell In[51], line 1
    ----&gt; 1 name_counts.index.apply(max)
    
    AttributeError: &#x27;Index&#x27; object has no attribute &#x27;apply&#x27;</pre>
    <p>To help, we can use .reset_index() to turn the index of a DataFrame into a column, and to reset the index back to the default of 0, 1, 2, 3, and so on.</p>
    <pre class='code'># What is the max of an individual string?
    name_counts.reset_index().get(&#x27;first&#x27;).apply(max)</pre>
    <pre class='output'>0      v
    1      y
    2      o
          ..
    197    y
    198    y
    199    x
    Name: first, Length: 200, dtype: object</pre>
    </div>
    <div class="section">
    <h3>Example: Shared first names and sections</h3>
    <ul>
    <li>Suppose you&#x27;re one of the $\approx$17% of students in DSC 10 who has a first name that is shared with at least one other student.</li></ul>
    <ul>
    <li>Let&#x27;s try and determine whether someone in your lecture section shares the same first name as you.
    <ul>
    <li>For example, maybe &#x27;Olivia Kcjqla&#x27; wants to see if there&#x27;s another &#x27;Olivia&#x27; in their section.</li>
    </ul>
    </li>
    </ul>
    <p>Strategy:</p>
    <ul>
    <li>Which section is &#x27;Olivia Kcjqla&#x27; in?</li></ul>
    <ul>
    <li>How many people in that section have a first name of &#x27;Olivia&#x27;?</li></ul>
    <pre class='code'>roster</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    <th>first</th>
    </tr>
    <tr>
    <td>0</td>
    <td>Allie Sazhma</td>
    <td>11AM</td>
    <td>Allie</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Amina Igxazd</td>
    <td>10AM</td>
    <td>Amina</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Jazmine Enesxr</td>
    <td>9AM</td>
    <td>Jazmine</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>219</td>
    <td>Ismayl Gwuiij</td>
    <td>10AM</td>
    <td>Ismayl</td>
    </tr>
    <tr>
    <td>220</td>
    <td>Neil Dkaqgm</td>
    <td>10AM</td>
    <td>Neil</td>
    </tr>
    <tr>
    <td>221</td>
    <td>Maggie Ldfgau</td>
    <td>9AM</td>
    <td>Maggie</td>
    </tr>
    </table>
    <p>222 rows × 3 columns</p>
    <pre class='code'>which_section = roster[roster.get(&#x27;name&#x27;) == &#x27;Olivia Kcjqla&#x27;].get(&#x27;section&#x27;).iloc[0]
    which_section</pre>
    <pre class='output'>&#x27;10AM&#x27;</pre>
    <pre class='code'>first_cond = roster.get(&#x27;first&#x27;) == &#x27;Olivia&#x27; # A Boolean Series!
    section_cond = roster.get(&#x27;section&#x27;) == which_section # A Boolean Series!
    how_many = roster[first_cond &amp; section_cond].shape[0]
    how_many</pre>
    <pre class='output'>1</pre>
    </div>
    <div class="section">
    <h3>Another function: shared_first_and_section</h3>
    <p>Let&#x27;s create a function named shared_first_and_section. It will take in the full name of a student and return the number of students in their section with the same first name and section (including them).</p>
    <p>Note: This is the first function we&#x27;re writing that involves using a DataFrame within the function – this is fine!</p>
    <pre class='code'>def shared_first_and_section(name):
        # First, find the row corresponding to that full name in roster.
        # We&#x27;re assuming that full names are unique.
        row = roster[roster.get(&#x27;name&#x27;) == name]
        
        # Then, get that student&#x27;s first name and section.
        first = row.get(&#x27;first&#x27;).iloc[0]
        section = row.get(&#x27;section&#x27;).iloc[0]
        
        # Now, find all the students with the same first name and section.
        shared_info = roster[(roster.get(&#x27;first&#x27;) == first) &amp; (roster.get(&#x27;section&#x27;) == section)]
        
        # Return the number of such students.
        return shared_info.shape[0]</pre>
    <pre class='code'>shared_first_and_section(&#x27;Olivia Kcjqla&#x27;)</pre>
    <pre class='output'>1</pre>
    <pre class='code'># This means that there is another Jimmy in the same section as Jimmy Xvngxm.
    shared_first_and_section(&#x27;Jimmy Xvngxm&#x27;)</pre>
    <pre class='output'>2</pre>
    <p>Now, let&#x27;s add a column to roster that contains the values returned by shared_first_and_section.</p>
    <pre class='code'>roster = roster.assign(shared=roster.get(&#x27;name&#x27;).apply(shared_first_and_section))
    roster</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    <th>first</th>
    <th>shared</th>
    </tr>
    <tr>
    <td>0</td>
    <td>Allie Sazhma</td>
    <td>11AM</td>
    <td>Allie</td>
    <td>1</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Amina Igxazd</td>
    <td>10AM</td>
    <td>Amina</td>
    <td>1</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Jazmine Enesxr</td>
    <td>9AM</td>
    <td>Jazmine</td>
    <td>1</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>219</td>
    <td>Ismayl Gwuiij</td>
    <td>10AM</td>
    <td>Ismayl</td>
    <td>1</td>
    </tr>
    <tr>
    <td>220</td>
    <td>Neil Dkaqgm</td>
    <td>10AM</td>
    <td>Neil</td>
    <td>1</td>
    </tr>
    <tr>
    <td>221</td>
    <td>Maggie Ldfgau</td>
    <td>9AM</td>
    <td>Maggie</td>
    <td>1</td>
    </tr>
    </table>
    <p>222 rows × 4 columns</p>
    <p>Let&#x27;s find all of the students who are in a section with someone that has the same first name as them.</p>
    <pre class='code'>roster[(roster.get(&#x27;shared&#x27;) &gt;= 2)].sort_values(&#x27;shared&#x27;, ascending=False)</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    <th>first</th>
    <th>shared</th>
    </tr>
    <tr>
    <td>192</td>
    <td>Ryan Oogwno</td>
    <td>11AM</td>
    <td>Ryan</td>
    <td>4</td>
    </tr>
    <tr>
    <td>36</td>
    <td>Ryan Mgetat</td>
    <td>11AM</td>
    <td>Ryan</td>
    <td>4</td>
    </tr>
    <tr>
    <td>41</td>
    <td>Ryan Nwdowi</td>
    <td>11AM</td>
    <td>Ryan</td>
    <td>4</td>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
    </tr>
    <tr>
    <td>203</td>
    <td>Felix Fnrqck</td>
    <td>10AM</td>
    <td>Felix</td>
    <td>2</td>
    </tr>
    <tr>
    <td>43</td>
    <td>Jimmy Xvngxm</td>
    <td>11AM</td>
    <td>Jimmy</td>
    <td>2</td>
    </tr>
    <tr>
    <td>107</td>
    <td>Noah Llpjpu</td>
    <td>10AM</td>
    <td>Noah</td>
    <td>2</td>
    </tr>
    </table>
    <p>21 rows × 4 columns</p>
    <p>We can narrow this down to a particular lecture section if we&#x27;d like.</p>
    <pre class='code'>one_section_only = (
        roster[(roster.get(&#x27;shared&#x27;) &gt;= 2) &amp; 
               (roster.get(&#x27;section&#x27;) == &#x27;10AM&#x27;)]
        .sort_values(&#x27;shared&#x27;, ascending=False)
    )
    one_section_only</pre>
    <table>
    <tr>
    <th></th>
    <th>name</th>
    <th>section</th>
    <th>first</th>
    <th>shared</th>
    </tr>
    <tr>
    <td>11</td>
    <td>Noah Qodtvo</td>
    <td>10AM</td>
    <td>Noah</td>
    <td>2</td>
    </tr>
    <tr>
    <td>70</td>
    <td>John Ubarsl</td>
    <td>10AM</td>
    <td>John</td>
    <td>2</td>
    </tr>
    <tr>
    <td>74</td>
    <td>John Paqmwc</td>
    <td>10AM</td>
    <td>John</td>
    <td>2</td>
    </tr>
    <tr>
    <td>85</td>
    <td>Felix Pgqrnv</td>
    <td>10AM</td>
    <td>Felix</td>
    <td>2</td>
    </tr>
    <tr>
    <td>107</td>
    <td>Noah Llpjpu</td>
    <td>10AM</td>
    <td>Noah</td>
    <td>2</td>
    </tr>
    <tr>
    <td>203</td>
    <td>Felix Fnrqck</td>
    <td>10AM</td>
    <td>Felix</td>
    <td>2</td>
    </tr>
    </table>
    <p>For instance, the above DataFrame preview is telling us that there are 2 Noahs, 2 Johns, and 2 Felixes in the 10AM section.</p>
    <pre class='code'># All of the names shared by multiple students in the 10AM section.
    one_section_only.get(&#x27;first&#x27;).unique()</pre>
    <pre class='output'>array([&#x27;Noah&#x27;, &#x27;John&#x27;, &#x27;Felix&#x27;], dtype=object)</pre>
    </div>
    <div class="section">
    <h3>Sneak peek</h3>
    <p>While the DataFrames on the previous slide contain the info we were looking for, they&#x27;re not organized very conveniently. For instance, there are two rows containing the fact that there are 2 Noahs in the 10AM lecture section.</p>
    <p>Wouldn&#x27;t it be great if we could create a DataFrame like the one below? We&#x27;ll see how next time!</p>
    <table>
    <tr>
    <th></th>
    <th>section</th>
    <th>first</th>
    <th>name</th>
    <th>shared</th>
    </tr>
    <tr>
    <td>0</td>
    <td>10AM</td>
    <td>Noah</td>
    <td>2</td>
    <td>2</td>
    </tr>
    <tr>
    <td>1</td>
    <td>11AM</td>
    <td>Jimmy</td>
    <td>2</td>
    <td>2</td>
    </tr>
    <tr>
    <td>2</td>
    <td>10AM</td>
    <td>Ismayl</td>
    <td>1</td>
    <td>1</td>
    </tr>
    </table>
    <pre class='code'>with_len = roster.assign(name_len=roster.get(&#x27;first&#x27;).apply(len))
    with_len[with_len.get(&#x27;shared&#x27;) &gt;= 2].sort_values(&#x27;name_len&#x27;, ascending=False).get(&#x27;first&#x27;).iloc[0]</pre>
    </div>
    <div class="section">
    <h3>Activity</h3>
    <p>Find the longest first name in the class that is shared by at least two students in the same section.</p>
    <p>Hint: You&#x27;ll have to use both .assign and .apply.</p>
    <pre class='code'>...</pre>
    <pre class='output'>Ellipsis</pre>
    </div>
    <div class="section">
    <h2>Summary, next time</h2>
    </div>
    <div class="section">
    <h3>Summary</h3>
    <ul>
    <li>Functions are a way to divide our code into small subparts to prevent us from writing repetitive code.</li></ul>
    <ul>
    <li>The .apply method allows us to call a function on every single element of a Series, which usually comes from .getting a column of a DataFrame.</li></ul>
    </div>
    <div class="section">
    <h3>Next time</h3>
    <p>More advanced DataFrame manipulations!</p>
    </div>