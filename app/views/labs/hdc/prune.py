import os
import re
pattern = re.compile("./views/labs/.*?/(images/(.*?\.png))")

if not os.path.exists("save"):
    os.mkdir("save")

for i, line in enumerate(open('index.html')):
    for match in re.finditer(pattern, line):
        #print 'Debug on line %s: %s' % (i+1, match.groups())
        print 'Found on line %s: %s. Moving to %s' % (i+1, match.groups()[0], "save/" + match.groups()[1])
        if not os.path.exists(match.groups()[0]):
            print "Image file does not exist: %s" % match.groups()[0]
        else:
            os.rename(match.groups()[0], "save/" + match.groups()[1])

os.rename("images", "old")
os.rename("save", "images")
