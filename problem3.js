from itertools import combinations
def choose_best_sum(t, k, ls):
    dist = 0
    for c in combinations(ls, k):
        if sum(c) <= t:
            dist = max(dist, sum(c))
    if dist == 0:
        return None
    return dist
