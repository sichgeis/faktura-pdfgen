%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  Copyright (c) 2011 Trey Hunner                                          %
%                                                                          %
%  Permission is hereby granted, free of charge, to any person obtaining   %
%  a copy of this software and associated documentation files (the         %
%  "Software"), to deal in the Software without restriction, including     %
%  without limitation the rights to use, copy, modify, merge, publish,     %
%  distribute, sublicense, and/or sell copies of the Software, and to      %
%  permit persons to whom the Software is furnished to do so, subject to   %
%  the following conditions:                                               %
%                                                                          %
%  The above copyright notice and this permission notice shall be          %
%  included in all copies or substantial portions of the Software.         %
%                                                                          %
%  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,         %
%  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF      %
%  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                   %
%  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE  %
%  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION  %
%  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION   %
%  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.         %
%                                                                          %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\ProvidesClass{invoice}

\LoadClass[a4paper, 11pt]{article}

\usepackage[parfill]{parskip} % Do not indent paragraphs
\usepackage{fp} % Fixed-point arithmetic
\usepackage{calc} % Counters for totaling hours and cost
\usepackage{longtable}
\usepackage{setspace}
\usepackage{ngerman}
\usepackage{eurosym}

\pagestyle{empty} % No page numbers

\setlength{\doublerulesep}{\arrayrulewidth} % Double rules look like one thick one

% Command for setting a default hourly rate
\newcommand{\feetype}[1]{
    \textbf{#1}
    \\
}

% Counters for totaling up hours and dollars
\newcounter{hours} \newcounter{subhours} \newcounter{cost} \newcounter{subcost} \newcounter{mem}
\setcounter{hours}{0} \setcounter{subhours}{0} \setcounter{cost}{0} \setcounter{subcost}{0} \setcounter{mem}{0}

% Formats inputed number with 2 digits after the decimal place
\newcommand*{\formatNumber}[1]{\FPround{\cost}{#1}{2}\cost} %

% Returns the total of counter
\newcommand*{\total}[1]{\FPdiv{\t}{\arabic{#1}}{1000}\formatNumber{\t}}

% Create an invoice table
\newenvironment{invoiceTable}{
    % Create a new row from title, unit quantity, unit rate, and unit name
    \newcommand*{\unitrow}[4]{%
         \addtocounter{cost}{1000 * \real{##2} * \real{##3}}%
         \addtocounter{subcost}{1000 * \real{##2} * \real{##3}}%
         ##1 & \formatNumber{##2} ##4 & \EUR{\formatNumber{##3}} & \EUR{\FPmul{\cost}{##2}{##3}\formatNumber{\cost}}%
         \\
    }
    % Create a new row from title and expense amount
    \newcommand*{\feerow}[2]{%
         \addtocounter{cost}{1000 * \real{##2}}%
         \addtocounter{subcost}{1000 * \real{##2}}%
         ##1 & & \EUR{\formatNumber{##2}} & \EUR{\FPmul{\cost}{##2}{1}\formatNumber{\cost}}%
         \\
    }

    \newcommand{\subtotalNoStar}{%
        \bf Zwischensumme & {\bf \total{subhours} Stunden} &  & {\bf \EUR{\total{subcost}}}%
        \setcounter{subcost}{0}%
        \setcounter{subhours}{0}%
        \\*[1.5ex]%
    }
    \newcommand{\subtotalStar}{%
        \bf Subtotal & & & {\bf \EUR{\total{subcost}}}%
        \setcounter{subcost}{0}%
        \\*[1.5ex]%
    }
    \newcommand{\subtotal}{%
        \hline%
        \@ifstar%
        \subtotalStar%
        \subtotalNoStar%
    }
    \newcommand{\steuer}{%
	\hline%
        \addtocounter{mem}{\arabic{cost} * \real{0.19}}%
        \addtocounter{cost}{\arabic{cost} * \real{0.19}}%
        \addtocounter{subcost}{\arabic{cost} * \real{0.19}}%
        Umsatzsteuer 19\% &  &  & \EUR{\total{mem}}%
	\\%
    }

    % Create a new row from date and hours worked (use stored fee type and hourly rate)
    \newcommand*{\hourrow}[3]{%
        \addtocounter{hours}{1000 * \real{##2}}%
        \addtocounter{subhours}{1000 * \real{##2}}%
        \unitrow{##1}{##2}{##3}{Stunden}%
    }
    \onehalfspacing
    \renewcommand{\tabcolsep}{0.8ex}
    \setlength\LTleft{0pt}
    \setlength\LTright{0pt}
    \begin{longtable}{@{\extracolsep{\fill}\hspace{\tabcolsep}} l r r r }
    \hline
    {\bf Beschreibung} & \multicolumn{1}{c}{\bf Quantität} & \multicolumn{1}{c}{\bf Einheitspreis} & \multicolumn{1}{c}{\bf Summe} \\*
    \hline\hline
    \endhead
}{
    \hline\hline\hline
    {\bf Gesamtsumme} & & & {\bf \EUR{\total{cost}}} \\
    \end{longtable}
}
